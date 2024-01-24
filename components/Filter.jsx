"use client";

import { useState, useEffect } from "react";
import Input from "@/components/Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Filter({ onApplyFilters }) {

  const [showFilter, setShowFilter] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState({});

  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  const handleCheckboxChange = (updatedCheckboxValues) => {
    setCheckboxValues(updatedCheckboxValues);
  };

  const applyFilters = () => {
    onApplyFilters(checkboxValues); 
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
          showFilter ? "block" : "hidden"
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

        <Input onCheckboxChange={handleCheckboxChange} />

        <div className="px-4 py-4">
          <button
            onClick={applyFilters}
            type="button"
            className="bg-blue-500 text-white py-2 w-full  sm:m-0 text-md font-semibold rounded-md align-self-center sm:box-content sm:w-full"
          >
            Aplicar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Filter;
