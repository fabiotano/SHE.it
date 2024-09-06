import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import { colors, filters } from "@/constants.js";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import chroma from "chroma-js";

const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
  { value: "black", label: "Black", color: "#000000" },
  { value: "white", label: "White", color: "#D3D3D3" },
  { value: "gray", label: "Gray", color: "#808080" },
  { value: "brown", label: "Brown", color: "#8B4513" },
  { value: "pink", label: "Pink", color: "#FFC0CB" },
];

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",
  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

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
        if (key === "subCategory") {
          const arrValues = value.split(",");
          setAppliedFilter((prevState) => ({
            ...prevState,
            category: arrValues,
          }));
        }
        if (key === "brand") {
          const arrValues = value.split(",");
          setAppliedFilter((prevState) => ({
            ...prevState,
            brand: arrValues,
          }));
        }
        if (key === "price") {
          const arrValues = value.split(",");
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
      return `${key}=${value.join(",")}`;
    });

    const filtersString = filters.join("&");

    router.push(`${pathName}?${filtersString}`);
  };

  return (
    <section>
      <div
        onClick={showFilterHandler}
        className=" flex gap-2 mx-auto justify-center h-10 border hover:bg-slate-300 border-gray-400 rounded-md text-sm w-1/2 mt-4 cursor-pointer sm:hidden "
      >
        <FontAwesomeIcon
          icon={faFilter}
          className="text-gray-600 h-4 self-center"
        />
        <p className="self-center">Filtri</p>
      </div>
      <div
        className={`${
          showFilter ? "block" : "hidden"
        } sm:block sm:w-[300px] border border-gray-400 rounded-md text-sm mx-4 md:mx-0 flex flex-col mr-6`}
      >
        <div className="flex justify-between items-center bg-slate-300 border-b-gray-200 px-4 py-2">
          <p className="text-gray-600 font-semibold sm:text-lg">Filtri</p>
          <FontAwesomeIcon
            icon={faFilterCircleXmark}
            className="text-gray-600 h-4 cursor-pointer"
            onClick={showFilterHandler}
          />
        </div>
        <div className="p-4">
          {filters.map((filterOption, index) => (
            <div key={index} className="my-6">
              <h3 className="text-sm font-bold">{filterOption.title}</h3>
              <div className="text-xs pl-2 mt-1 mb-3">
                <Select
                  isMulti
                  options={filterOption.options.map((option) => ({
                    value: option,
                    label: option,
                  }))}
                  value={(appliedFilter[filterOption.titleBackend] || []).map(
                    (option) => ({
                      value: option,
                      label: option,
                    })
                  )}
                  onChange={(selectedOptions) => {
                    const values = selectedOptions
                      ? selectedOptions.map((option) => option.value)
                      : [];
                    setAppliedFilter((prevState) => ({
                      ...prevState,
                      [filterOption.titleBackend]: values,
                    }));
                  }}
                />
              </div>
            </div>
          ))}

          {colors.map((filterOption, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold">{filterOption.title}</h3>
              <div className="text-xs pl-2 mt-1 mb-3">
                <Select
                  styles={colourStyles}
                  isMulti
                  options={filterOption.options.map((option) => ({
                    value: option,
                    label: option,
                    color:
                      colourOptions.find((col) => col.value === option)
                        ?.color || "#ffffff",
                  }))}
                  value={(appliedFilter[filterOption.titleBackend] || []).map(
                    (option) => ({
                      value: option,
                      label: option,
                      color:
                        colourOptions.find((col) => col.value === option)
                          ?.color || "#ffffff",
                    })
                  )}
                  onChange={(selectedOptions) => {
                    const values = selectedOptions
                      ? selectedOptions.map((option) => option.value)
                      : [];
                    setAppliedFilter((prevState) => ({
                      ...prevState,
                      [filterOption.titleBackend]: values,
                    }));
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 w-full  sm:m-0 text-md font-semibold rounded-md align-self-center sm:box-content sm:w-full hover:opacity-80"
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
