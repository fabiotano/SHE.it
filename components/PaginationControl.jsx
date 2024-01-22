'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
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
        router.push(`?page=${page}&perPage=${perPage}`);
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

  const [pagePagination, setPagePagination] = useState({
    page: parseInt(searchParams.page) || 1,
    perPage: parseInt(searchParams.perPage) || 5,
  });

  function handleNextPage() {
    setPagePagination({
      page: pagePagination.page + 1,
      perPage: pagePagination.perPage,
    });
    router.push(
      `?page=${pagePagination.page + 1}&perPage=${pagePagination.perPage}`
    );
  }

  function handlePreviousPage() {
    setPagePagination({
      page: pagePagination.page - 1,
      perPage: pagePagination.perPage,
    });
    router.push(
      `?page=${pagePagination.page - 1}&perPage=${pagePagination.perPage}`
    );
  }

  return (
    <div
      className={`flex justify-center gap-2 my-6 ${
        !hasPagination ? 'hidden' : ''
      }`}
    >
      <button
        className={`border border-gray-400 px-2 py-2 outline-none ${
          !hasPreviousPage ? 'bg-gray-300' : ''
        }`}
        onClick={handlePreviousPage}
        disabled={!hasPreviousPage}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {Array.from(Array(pageQuantity).keys()).map((page) => (
        <PageButton
          key={page}
          page={page + 1}
          perPage={pagePagination.perPage}
          setPagePagination={setPagePagination}
          router={router}
        />
      ))}
      <button
        className={`border border-gray-400 px-2 py-2 outline-none ${
          !hasNextPage ? 'bg-gray-300' : ''
        }`}
        onClick={handleNextPage}
        disabled={!hasNextPage}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default PaginationControl;
