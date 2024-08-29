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
  const [isRedirected, setIsRedirected] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmRegion, setConfirmRegion] = useState(null);
  const router = useRouter();
  const isTablet = useMediaQuery("(max-width: 1025px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  let timeoutId; // Variable para guardar el ID del timeout

  const handleRegion = (geo) => {
    if (!isRedirected) {
      const regName = geo.properties.reg_name;
      setSelectedRegion(regName);
      setConfirmRegion(regName);
      timeoutId = setTimeout(() => {
        setShowConfirm(true);
      }, 500);
    }
  };

  const confirmSelection = () => {
    clearTimeout(timeoutId); // Limpiar el timeout si se confirma
    setIsRedirected(true);
    setShowConfirm(false);
    setTimeout(() => {
      router.push("/home");
    }, 200);
  };

  const cancelSelection = () => {
    clearTimeout(timeoutId); // Limpiar el timeout si se cancela
    setShowConfirm(false);
    setSelectedRegion(null);
  };

  useEffect(() => {
    if (selectedRegion) {
      console.log(`Hai selezionato la regione ${selectedRegion}`);
    }
  }, [selectedRegion]);

  const projectionConfig = {
    rotate: [-10, -55.5, -2],
    center: isMobile ? [1.5, -11.5] : isTablet ? [1.5, -11.5] : [3, -13.5],
    scale: isMobile ? 5050 : isTablet ? 4250 : 4000,
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row-reverse pt-4 px-4 overflow-hidden">
      {/* Mappa */}
      <div className="w-full lg:w-1/2 max-h-screen overflow-auto relative">
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
                  onClick={() => handleRegion(geo)}
                  style={{
                    default: {
                      fill: "#d0d0d0",
                      stroke: "#909090",
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    hover: {
                      fill: "#909090",
                      outline: "none",
                      transition: "fill 0.3s ease, transform 0.5s ease",
                      transform: "translateY(-3px)",
                      zIndex: 10,
                    },
                    pressed: {
                      fill: "#282624",
                      outline: "none",
                      transition: "fill 0.6s, transform 0.5s ease",
                      transform: "translateY(-5px)",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* Texto */}
      <div className="lg:w-1/2 flex flex-col flex-end justify-center items-center lg:items-end text-gray-600 text-center lg:text-left lg:mr-20 mt-4 lg:mt-0">
        <Image
          src="/logoShe.png"
          height={50}
          width={75}
          className="w-36 lg:w-44 m-6"
          alt="Logo SHE"
        />
        <p className="font-bold text-lg lg:text-3xl">
          Seleziona la tua regione
        </p>
        <p className="mt-3 text-md lg:text-lg">
          per vedere prodotti e offerte disponibili nella tua zona.
        </p>
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
                className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm"
              >
                Sì
              </button>
              <button
                onClick={cancelSelection}
                className="bg-gray-500 text-white px-6 py-2 rounded-md text-sm"
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
