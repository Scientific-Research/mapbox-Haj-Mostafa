// MapView
import { useRef, useEffect } from "react";
import { initMap } from "../utils/initMap";
import { Map } from "mapbox-gl";
import { generateNewMarker } from "../utils/generateNewMarker";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const mapInitRef = useRef<Map | null>(null);
  //   useMap(mapRef);

  useEffect(() => {
    if (container.current) {
      mapInitRef.current = initMap(container.current, [13.4, 52.52]);
      mapInitRef.current = initMap(container.current, [2.33, 48.87]);
      mapInitRef.current = initMap(container.current, [4.33, 50.83]);
    }
  }, []);

  useEffect(() => {
    mapInitRef.current &&
      mapInitRef.current.on("load", () =>
        generateNewMarker({
          map: mapInitRef.current,
          ...mapInitRef.current!.getCenter(),
        })
      );
    return () => {
      mapInitRef.current?.off("load", generateNewMarker);
    };
  }, []);

  useEffect(() => {
    mapInitRef.current &&
      mapInitRef.current.on("dblclick", ({ lngLat }) =>
        generateNewMarker({ map: mapInitRef.current, ...lngLat })
      );

    return () => {
      mapInitRef.current?.off("dblclick", generateNewMarker);
    };
  }, []);
};
