"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@react-hook/media-query";

const geoUrl =
  "https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson";

export default function Page() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isRedirected, setIsRedirected] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmRegion, setConfirmRegion] = useState(null);
  const router = useRouter();

  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(min-width: 481px) and (max-width: 1023px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  let timeoutId;

  const handleRegion = (geo) => {
    if (!isRedirected) {
      const regName = geo.properties.reg_name;
      setSelectedRegion(regName);
      setConfirmRegion(regName);
      timeoutId = setTimeout(() => {
        setShowConfirm(true);
      }, 300);
    }
  };

  const confirmSelection = () => {
    clearTimeout(timeoutId);
    setIsRedirected(true);
    setShowConfirm(false);
    setIsClicked(true); // Marca el estado como clickeado
    setSelectedRegion(null);

    const mapElement = document.querySelector(".map-container");
    if (mapElement) {
      mapElement.classList.add("animate-zoom-in");
      mapElement.classList.remove("lg:border-l-2");
    }

    setTimeout(() => {
      router.push("/home");
    }, 1500);
  };

  const cancelSelection = () => {
    clearTimeout(timeoutId);
    setShowConfirm(false);
    setSelectedRegion(null);
    setIsClicked(false); // Muestra el bloque si se cancela
  };

  const regionReset = () => {
    if (!isRedirected) {
      setSelectedRegion(null);
    }
  };

  const showRegion = (geo) => {
    if (!isRedirected) {
      const regName = geo.properties.reg_name;
      setSelectedRegion(regName);
    }
  };

  useEffect(() => {
    if (selectedRegion) {
      console.log(`Hai selezionato la regione ${selectedRegion}`);
    }
  }, [selectedRegion]);

  const projectionConfig = {
    rotate: [-10, -55.5, -2],
    center: isMobile
      ? [1.5, -15]
      : isTablet
      ? [1.5, -13]
      : isLaptop
      ? [2, -13.5]
      : [3, -13.5],
    scale: isMobile ? 5050 : isTablet ? 5000 : isLaptop ? 4000 : 3700,
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row pt-4 px-4 overflow-hidden">
      {/* Texto */}
      <div className={`lg:w-1/2 flex flex-col flex-end justify-center items-center lg:items-end text-gray-600 text-center lg:text-left lg:mr-20 lg:mt-0 `}>
        <Image
          src="/logoShe.png"
          height={50}
          width={75}
          className="w-36 lg:w-52 m-2 lg:m-6"
          alt="Logo SHE"
        />
        <p className="m-1 font-bold text-lg lg:text-3xl animate-fade-in">
          Seleziona la tua regione
        </p>
        <p className="m-1 text-md lg:text-2xl animate-fade-in">
          per vedere i prodotti disponibili nella tua zona.
        </p>
        {/* Nombre della regione selezionata */}
        <div
          className={`m-4 w-auto min-h-12 ${
            isMobile ? "hidden" : "flex"
          } ${!isClicked && selectedRegion
            ? "shadow-lg rounded-lg bg-gray-200 px-4 py-2 text-center text-xl font-semibold text-gray-700 border border-gray-500"
            : "bg-transparent text-gray-600"
          }`}
        >
          {isClicked && selectedRegion ? (
            <p className="text-white">{selectedRegion}</p>
          ) : (
            selectedRegion &&
            !isRedirected && <p className="text-lg">{selectedRegion}</p>
          )}
        </div>
      </div>

      {/* Mappa */}
      <div
        className={`map-container w-full h-full lg:border-l-2 border-gray-200 m-auto overflow-auto relative animate-fade-in ${
          isMobile ? "max-w-[390px]" : isTablet ? "max-w-[475px]" : "max-w-none"
        } lg:w-1/2`}
      >
        <ComposableMap
          className="w-full h-full"
          projection="geoAzimuthalEqualArea"
          projectionConfig={projectionConfig}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  className="h-full"
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => !isRedirected && showRegion(geo)}
                  onMouseLeave={() => !isRedirected && regionReset()}
                  onClick={() => !isRedirected && handleRegion(geo)}
                  style={{
                    default: {
                      fill: isRedirected && geo.properties.reg_name === confirmRegion
                        ? "#282624" // Gris oscuro para la región confirmada
                        : "#d0d0d0", // Color por defecto para regiones no confirmadas
                      stroke: "#909090",
                      strokeWidth: 0.4,
                      outline: "none",
                      cursor: isRedirected ? "default" : "pointer", // Cambiar cursor si ya está seleccionado
                    },
                    hover: {
                      fill: isRedirected
                        ? (geo.properties.reg_name === confirmRegion
                            ? "#282624" // Gris oscuro para la región confirmada
                            : "#d0d0d0") // Mantener el color de fondo para regiones no confirmadas
                        : "#909090", // Color de hover para regiones no confirmadas
                      outline: "none",
                      transition: "fill 0.3s ease, transform 0.5s ease",
                      transform: "translateY(-3px)",
                      zIndex: 10,
                      cursor: isRedirected ? "default" : "pointer", // Cambiar cursor si ya está seleccionado
                    },
                    pressed: {
                      fill: "#282624",
                      outline: "none",
                      transition: "fill, transform 0.5s ease",
                      transform: "translateY(-5px)",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-80 z-50 px-4 py-8">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full mx-4 z-60">
            <h3 className="text-lg font-semibold mb-6">
              Sei sicuro di voler selezionare{" "}
              <span className="mt-3 px-2 py-1 rounded-md bg-gray-600 text-white">
                {confirmRegion}
              </span>
              ?
            </h3>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={confirmSelection}
                className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm hover:scale-105 hover:opacity-60"
              >
                Sì
              </button>
              <button
                onClick={cancelSelection}
                className="bg-gray-500 text-white px-6 py-2 rounded-md text-sm hover:scale-105 hover:opacity-60"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
