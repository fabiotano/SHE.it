'use client'
import styles from "./MapChart.module.css";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson";

export default function MapChart() {
  // Estado para almacenar la región que se está haciendo hover
  const [selectedRegion, setSelectedRegion] = useState(null);

  const selectRegion = (geo) => {
    const regName = geo.properties.reg_name;
    setSelectedRegion(regName);
    console.log(`Has seleccionado la región ${selectedRegion}`);
  };

  return (
    <div className={styles.mapContainer}>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => selectRegion(geo)}
                style={{
                  default: {
                    fill: "#808080",
                    outline: "none",
                  },
                  hover: {
                    fill: "blue",
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
