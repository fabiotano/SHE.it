'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { useState } from 'react';

import { sortOptions } from '@/constants';

function ProductSort() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSort = (e) => {
    const sort = e.target.value;

    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set('sort', sort);

    if (sort) {
      router.push(`/products?${newSearchParams.toString()}`);
    }
  };

  return (
    <select
      className="border-b border-gray-400  px-2 text-sm mx-10 py-3 outline-none w-full sm:w-auto"
      onChange={handleSort}
    >
      {sortOptions.map((option, index) => (
        <option key={index} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}

export default ProductSort;
