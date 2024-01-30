'use client';

import { useEffect, useState } from 'react';
import { filters } from '@/constants.js';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter,
  faFilterCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

function ProductFilter() {
  const [showFilter, setShowFilter] = useState(false);
  const [appliedFilter, setAppliedFilter] = useState({});

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    const showSelectedFilters = () => {
      searchParams.forEach((value, key) => {
        if (key === 'category') {
          const arrValues = value.split(',');
          setAppliedFilter((prevState) => ({
            ...prevState,
            category: arrValues,
          }));
        }
        if (key === 'brand') {
          const arrValues = value.split(',');
          setAppliedFilter((prevState) => ({
            ...prevState,
            brand: arrValues,
          }));
        }
        if (key === 'available') {
          const arrValues = value.split(',');
          setAppliedFilter((prevState) => ({
            ...prevState,
            available: arrValues,
          }));
        }
      });
    };
    showSelectedFilters();
  }, []);

  const handleFilters = (e) => {
    const { filterCategory } = e.target.dataset;
    const { name } = e.target;
    const { checked } = e.target;

    if (checked) {
      setAppliedFilter((prevState) => ({
        ...prevState,
        [filterCategory]: [...(prevState[filterCategory] || []), name],
      }));
    }

    if (!checked) {
      setAppliedFilter((prevState) => {
        const { [filterCategory]: rest, ...restOfFilters } = prevState;
        const newFilters = rest.filter((filter) => filter !== name);

        return newFilters.length > 0
          ? { ...restOfFilters, [filterCategory]: newFilters }
          : { ...restOfFilters };
      });
    }
  };

  const applyFilters = () => {
    const filters = Object.entries(appliedFilter).map(([key, value]) => {
      return `${key}=${value.join(',')}`;
    });

    const filtersString = filters.join('&');

    router.push(`${pathName}?${filtersString}`);
  };

  return (
    <section>
      <div
        onClick={showFilterHandler}
        className="flex gap-2 justify-center h-10 border border-gray-400 rounded-md text-sm mx-4 mt-4 cursor-pointer sm:hidden "
      >
        <FontAwesomeIcon
          icon={faFilter}
          className="text-gray-400 h-4 self-center"
        />
        <p className="self-center">Filtros</p>
      </div>
      <div
        className={`${
          showFilter ? 'block' : 'hidden'
        } sm:block sm:w-[200px] border border-gray-400 rounded-md text-sm mx-4 mt-4 flex flex-col `}
      >
        <div className="flex justify-between items-center px-4 py-2">
          <p className="text-gray-400 sm:text-lg">Filtros</p>
          <FontAwesomeIcon
            icon={faFilterCircleXmark}
            className="text-gray-400 h-4 cursor-pointer sm:hidden"
            onClick={showFilterHandler}
          />
        </div>
        {
          <div className="px-4 py-2">
            {filters.map((filterOption, index) => (
              <div key={index}>
                <h3 className="text-sm font-bold">{filterOption.title}</h3>
                <ul className="text-xs pl-2 mt-1">
                  {filterOption.options.map((option, index) => (
                    <li key={index} className="py-1">
                      <label htmlFor={option} className="flex  gap-2">
                        <input
                          data-filter-category={filterOption.titleBackend}
                          type="checkbox"
                          checked={
                            appliedFilter[filterOption.titleBackend] &&
                            appliedFilter[filterOption.titleBackend].includes(
                              option
                            )
                          }
                          name={option}
                          id={option}
                          onChange={(e) => handleFilters(e)}
                        />
                        <span className="text-xs">{option}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        }
        <div className="px-4 py-4">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 w-full  sm:m-0 text-md font-semibold rounded-md align-self-center sm:box-content sm:w-full"
            onClick={applyFilters}
          >
            Aplicar
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductFilter;
