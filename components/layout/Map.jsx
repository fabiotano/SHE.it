"use client";
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useRouter } from "next/navigation";

import { useMediaQuery } from "@react-hook/media-query";

const geoUrl =
  "https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson";

export default function Page() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter(); // Descomenta esta línea

  const isMobile = useMediaQuery("(max-width: 768px)"); // Mover el hook aquí

  const showRegion = (geo) => {
    setIsHovered(true);
    const regName = geo.properties.reg_name;
    setSelectedRegion(regName);
  };

  const regionClicked = () => {
    setIsClicked(true);
    setIsHovered(false);

    // Introducir un retraso de 3 segundos antes de la redirección
    setTimeout(() => {
      router.push("/home");
    }, 450);
  };

  const regionReset = () => {
    setIsClicked(false);
    setIsHovered(false);
    setSelectedRegion(null);
  };

  useEffect(() => {
    // Esta función se ejecutará cada vez que selectedRegion cambie
    console.log(`Has seleccionado la región ${selectedRegion}`);
  }, [selectedRegion]);

  return (
    <div className="relative">
      <div className="text-center h-10 mt-6 mb-4">
        {isClicked ? (
          <p className="text-xl" style={{ color: "red" }}> {selectedRegion}</p>
        ) : (
          <>
            {isHovered ? (
              selectedRegion
            ) : (
              <>
                <p className="text-sm md:text-lg mb-2">
                  Da dove ci stai contattando?
                </p>
                <p className="text-xs md:text-md">
                  Mostreremo tutti i nostri prodotti disponibili per la tua
                  regione.
                </p>
              </>
            )}
          </>
        )}
      </div>

      <ComposableMap
        className="w-full md:w-auto"
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-11.0, -53, 0],
          center: isMobile ? [0, -11.5] : [0, -17.5],
          scale: isMobile ? 2600 : 1400,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => showRegion(geo)}
                onMouseLeave={regionReset}
                onClick={regionClicked}
                style={{
                  default: {
                    fill: "#C0C0C0",
                    stroke: "#404040",
                    strokeWidth: 0.1,
                    outline: "none",
                  },
                  hover: {
                    fill: "#404040",
                    outline: "none",
                  },
                  pressed: {
                    fill: "yellow",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
