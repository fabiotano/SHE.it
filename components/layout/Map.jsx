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
  const [isRedirected, setIsRedirected] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const showRegion = (geo) => {
    if (!isRedirected) {
      const regName = geo.properties.reg_name;
      setSelectedRegion(regName);
    }
  };

  const regionClicked = () => {
    setIsClicked(true);
    setIsRedirected(true);
    setTimeout(() => {
      router.push("/home");
    }, 500);
  };

  const regionReset = () => {
    if (!isRedirected) {
      setSelectedRegion(null);
    }
  };

  useEffect(() => {
    console.log(`Hai selezionato la regione ${selectedRegion}`);
  }, [selectedRegion]);

  return (
    <div className="relative p-6">
      {/* Testo introduttivo minimalista */}
      <p className="absolute left-1/3 font-bold transform -translate-x-1/2 top-52 text-gray-600 text-lg md:text-2xl">
        Seleziona la tua regione
      </p>
      <p className="absolute left-1/3 transform -translate-x-1/2 top-60 mt-3 text-gray-600 text-md md:text-md">
        per vedere prodotti e offerte disponibili.
      </p>

      {/* Nome della regione selezionata */}
      <div
        className={`absolute left-1/3 transform -translate-x-1/2 top-80 ${
          selectedRegion
            ? "shadow-lg rounded-full bg-gray-400 px-6 py-3 w-auto text-center text-xl font-semibold text-gray-700 border border-gray-500"
            : "bg-transparent"
        }`}
      >
        {isClicked && selectedRegion ? (
          <p className="text-white">{selectedRegion}</p>
        ) : (
          selectedRegion &&
          !isRedirected && <p className="text-lg">{selectedRegion}</p>
        )}
      </div>

      {/* Mappa minimalista con maggiore visibilità */}
      <ComposableMap
        className="rounded-lg overflow-hidden shadow-lg"
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10, -53, -2],
          center: isMobile ? [0, -11.5] : [-3, -16.1],
          scale: isMobile ? 3000 : 1600,
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
                    fill: "#d0d0d0",
                    stroke: "#909090",
                    strokeWidth: 0.4,
                    outline: "none",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  },
                  hover: {
                    fill: "#909090",
                    outline: "none",
                    transition: "fill 0.3s ease, transform 0.5s ease",
                    transform: "translateY(-3px)",
                    zIndex: 10,
                  },
                  pressed: {
                    fill: "#FFDD57",
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
  );
}
