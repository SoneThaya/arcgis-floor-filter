import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

const Map = () => {
  const MapEl = useRef(null);

  useEffect(() => {
    loadModules([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/widgets/FloorFilter",
    ]).then(([WebMap, MapView, FloorFilter]) => {
      const webmap = new WebMap({
        portalItem: {
          id: "f133a698536f44c8884ad81f80b6cfc7",
        },
      });

      const view = new MapView({
        container: "viewDiv",
        map: webmap,
      });

      view.when(() => {
        // Initialize the FloorFilter widget
        const floorFilter = new FloorFilter({
          view: view,
        });

        // Add the FloorFilter to the view
        view.ui.add(floorFilter, "top-trailing");
      });
    });
  }, []);

  return (
    <div
      id="viewDiv"
      style={{ height: "100vh", width: "100vw" }}
      ref={MapEl}
    ></div>
  );
};

export default Map;
