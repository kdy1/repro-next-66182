"use client";

import React, { useEffect, useRef } from "react";

import H from "@here/maps-api-for-javascript/bin/mapsjs.bundle.harp.js";

const Map = (props) => {
  const mapRef = useRef(null);
  const map = useRef(null);
  const platform = useRef(null);
  const { apikey } = props;
  useEffect(() => {
    if (!map.current) {
      platform.current = new H.service.Platform({ apikey });
      const engineType = H.Map.EngineType["HARP"];
      const layers = platform.current.createDefaultLayers({ engineType });
      const newMap = new H.Map(mapRef.current, layers.vector.normal.map, {
        engineType,
        pixelRatio: window.devicePixelRatio,
        center: {
          lat: 64.144,
          lng: -21.94,
        },
        zoom: 14,
      });
      new H.mapevents.Behavior(new H.mapevents.MapEvents(newMap));

      map.current = newMap;
    }
  }, [apikey]);

  return <div style={{ width: "100%", height: "500px" }} ref={mapRef} />;
};

export default Map;
