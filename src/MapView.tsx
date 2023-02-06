import { useRef } from "react";
import { useMap } from "./hook/useMap";

export const MapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  useMap(mapRef);
  //   const mapRef2 = useRef<HTMLDivElement>(null);
  //   useMap2(mapRef2);
  //   const mapRef3 = useRef<HTMLDivElement>(null);
  //   useMap(mapRef3);

  //   return <div ref={mapRef2} className="map" />;
  return (
    <>
      <div ref={mapRef} className="map" />
      {/* <div ref={mapRef2} className="map" /> */}
    </>
  );
};
