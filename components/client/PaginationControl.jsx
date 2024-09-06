'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function PaginationControl({
  hasNextPage,
  hasPreviousPage,
  hasPagination,
  pageQuantity,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const [pagePagination, setPagePagination] = useState({
    page: currentPage,
    perPage: parseInt(searchParams.get('perPage')) || 9, // Usa 'get' en lugar de acceso directo
  });

  function handlePagination(paginationOption) {
    let newPage;

    if (paginationOption === 'next') {
      newPage = currentPage + 1;
    } else if (paginationOption === 'previous') {
      newPage = currentPage - 1;
    } else if (typeof paginationOption === 'number') {
      newPage = paginationOption;
    }

    console.log('Current Page:', currentPage);
    console.log('New Page:', newPage);

    setPagePagination((prevPagination) => ({
      ...prevPagination,
      page: newPage,
    }));

    const newSearchParams = new URLSearchParams({
      ...pagePagination,
      page: newPage,
    });

    // merge parameters and push new search params to router
    const mergedSearchParams = mergeSearchParams(searchParams, newSearchParams);
    console.log('Merged Search Params:', mergedSearchParams);
    router.push(`?${mergedSearchParams}`);
  }

  return (
    <div
      className={`flex justify-center gap-2 mt-6 mb-8 ${
        !hasPagination ? 'hidden' : 'block'
      }`}
    >
      <button
        className={`border border-gray-400 px-2 py-2 outline-none ${
          !hasPreviousPage ? 'hidden' : ''
        }`}
        onClick={() => handlePagination('previous')}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {Array.from(Array(Math.min(3, pageQuantity)).keys()).map((page) => (
        <button
          className={`border border-gray-400 px-2 py-2 outline-none ${
            parseInt(currentPage) === page + 1 ? 'bg-gray-300' : ''
          } `}
          key={page}
          onClick={() => handlePagination(page + 1)}
          disabled={parseInt(currentPage) === page + 1}
        >
          {page + 1}
        </button>
      ))}
      <button
        className={`border border-gray-400 px-2 py-2 outline-none ${
          !hasNextPage ? 'hidden' : ''
        }`}
        onClick={() => handlePagination('next')}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default PaginationControl;

function mergeSearchParams(existingParams, newParams) {
  const mergedParams = new URLSearchParams(existingParams);

  // override or add new parameters
  for (const [key, value] of newParams) {
    mergedParams.set(key, value);
  }

  return mergedParams.toString();
}
