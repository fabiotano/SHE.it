import React, { useState, useEffect } from "react";
import { filters } from "@/constants.js";

const Input = ({ onCheckboxChange }) => {
  const [checkboxValues, setCheckboxValues] = useState({});
  
  useEffect(() => {
    // Inicializar el estado basado en el objeto `filters`
    const initialCheckboxValues = filters.reduce((acc, filter) => {
      acc[filter.title] = filter.options.reduce((optionsAcc, option) => {
        optionsAcc[option] = false;
        return optionsAcc;
      }, {});
      return acc;
    }, {});

    setCheckboxValues(initialCheckboxValues);
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleCheckboxChange = (filterTitle, option) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [filterTitle]: {
        ...prevValues[filterTitle],
        [option]: !prevValues[filterTitle][option],
      },
    }));
  };

  // Notificar al componente principal sobre el cambio
  useEffect(() => {
    onCheckboxChange(checkboxValues);
  }, [checkboxValues, onCheckboxChange]);

  // console.log(checkboxValues);

  return (
    <div>
      {filters.map((filter, index) => (
        <div key={index} className="px-4 py-2">
          <h3 className="text-sm font-bold">{filter.title}</h3>
          <ul className="text-xs pl-2 mt-1">
            {filter.options.map((option, index) => (
              <li key={index} className="py-1">
                <label htmlFor={option} className="flex gap-2">
                  <input
                    type="checkbox"
                    name={option}
                    id={option}
                    onChange={() => handleCheckboxChange(filter.title, option)}
                  />
                  <span className="text-xs">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Input;
