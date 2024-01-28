'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function PageButton({ page, perPage, setPagePagination, router }) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  return (
    <button
      className={`border border-gray-400 px-2 py-2 outline-none ${
        parseInt(currentPage) === page ? 'bg-gray-300' : ''
      } `}
      onClick={() => {
        setPagePagination({
          page: page,
          perPage: perPage,
        });
      }}
      disabled={parseInt(currentPage) === page}
    >
      {page}
    </button>
  );
}

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
    perPage: parseInt(searchParams.perPage) || 5,
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

    console.log(paginationOption);

    setPagePagination((prevPagination) => ({
      ...prevPagination,
      page: newPage,
    }));

    const newSearchParams = new URLSearchParams({
      ...pagePagination,
      page: newPage, // Use the new page number
    });

    // merge parameters and push new search params to router
    const mergedSearchParams = mergeSearchParams(searchParams, newSearchParams);
    router.push(`?${mergedSearchParams}`);
  }

  return (
    <div
      className={`flex justify-center gap-2 my-6 ${
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
      {Array.from(Array(pageQuantity).keys()).map((page) => (
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
  console.log('mergedParams', mergedParams.toString());
  // override or add new parameters
  for (const [key, value] of newParams) {
    mergedParams.set(key, value);
  }
  console.log('mergedParams2', mergedParams.toString());

  return mergedParams.toString();
}