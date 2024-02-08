'use client'
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useRouter } from 'next/navigation';

const geoUrl =
  "https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson";

export default function page() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter(); // Descomenta esta línea

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
    router.push('/home');
  }, 1500);
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
      <h1 className="text-md md:text-xl text-center mt-6">
        {isClicked ? (
          <span style={{ color: 'red' }}>HAI SELEZIONATO {selectedRegion}</span>
        ) : (
          isHovered ? selectedRegion : "Indique la región de donde pides"
        )}
      </h1>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-11.0, -53, 0],
          center: [0, -18.5],
          scale: 1300,
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
