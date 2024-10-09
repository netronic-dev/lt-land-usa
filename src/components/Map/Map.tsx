import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Tooltip from "@mui/material/Tooltip";
import { csv } from "d3-fetch";
import { useInView } from "react-intersection-observer";
import style from "./style.module.scss";

const geoUrl = "/map/map.json";

type Data = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

const Map = () => {
  const [data, setData] = useState<Data[]>([]);
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView && data.length === 0) {
    csv<any>("/map/countries.csv").then((csvData) => {
      const transformedData = csvData as unknown as Data[];
      setData(transformedData);
    });
  }

  return (
    <div ref={ref} className={style.map}>
      {inView && (
        <ComposableMap data-tip="">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isMarked = data.some(
                  (country) => country.name === geo.properties.NAME
                );
                return (
                  <Tooltip key={geo.rsmKey} title={tooltipContent} arrow>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      stroke="#fff"
                      strokeWidth={0.5}
                      fill={isMarked ? "#0090FF" : "#5D768F"}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        setTooltipContent(NAME);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent(null);
                      }}
                      style={{
                        default: {
                          outline: "none",
                        },
                        hover: {
                          fill: "#0090FF",
                          outline: "none",
                        },
                        pressed: {
                          outline: "none",
                        },
                      }}
                      data-tip={tooltipContent || ""}
                    />
                  </Tooltip>
                );
              })
            }
          </Geographies>
        </ComposableMap>
      )}
    </div>
  );
};

export default Map;
