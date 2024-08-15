// MapWithMarkers.tsx
import React, { useEffect, useRef, useState } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import Search from "@arcgis/core/widgets/Search.js";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { setMapData } from "../mapSlice";
import * as geodesicUtils from "@arcgis/core/geometry/support/geodesicUtils.js";
interface Mark {
  latitude: number;
  longitude: number;
}

const MapWithMarkers: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [dist, setDistance] = useState<number>();
  const [arr, setArr] = useState<Mark[]>([]);
  const viewDivRef = useRef<HTMLDivElement>(null);
  const graphicsRef = useRef<Graphic[]>([]);
  useEffect(() => {
    if (viewDivRef.current) {
      const map = new Map({
        basemap: "dark-gray-vector",
      });

      const view = new MapView({
        container: viewDivRef.current,
        map: map,
        center: [139.58, -2.296], // Longitude, latitude
        zoom: 2,
      });
      const searchWidget = new Search({
        view: view,
      });
      view.ui.add(searchWidget, {
        position: "top-right",
        index: 2,
      });
      view.on("click", (event) => {
        // Check if there are already two markers
        if (graphicsRef.current.length >= 2) {
          alert("You can only place up to two markers on the map.");
          return; // Prevent adding more than two markers
        }

        // Get the coordinates of the click
        const coordinates = event.mapPoint;

        // Create a point graphic
        const pointGraphic = new Graphic({
          geometry: new Point({
            x: coordinates.longitude,
            y: coordinates.latitude,
            spatialReference: { wkid: 4326 }, // WGS84
          }),
        });

        // Add the graphic to the view and the graphics array
        view.graphics.add(pointGraphic);
        graphicsRef.current.push(pointGraphic);
        // arr.push({
        //   latitude: coordinates.latitude,
        //   longitude: coordinates.longitude,
        // });
        setArr((prevArr) => [
          ...prevArr,
          {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          },
        ]);
        // Show coordinates in the console
        // Open a popup showing the coordinates
        view.openPopup({
          title: "Coordinates",
          content: `Longitude: ${coordinates.longitude.toFixed(
            4
          )}, Latitude: ${coordinates.latitude.toFixed(4)}`,
          location: coordinates,
        });
      });
    }
  }, []);
  useEffect(() => {
    if (arr.length === 2) {
      const join = geodesicUtils.geodesicDistance(
        new Point({ x: arr[0]?.longitude, y: arr[0]?.latitude }),
        new Point({ x: arr[1]?.longitude, y: arr[1]?.latitude }),
        "kilometers"
      );
      const { distance } = join;
      setDistance(Number(distance));
    } else {
      return;
    }
  }, [arr]);
  useEffect(() => {
    if (arr.length === 2) {
      dispatch(
        setMapData({
          point1: arr[0],
          point2: arr[1],
          distance: dist ?? 0,
        })
      );
    }
  }, [arr, dispatch, dist]);
  return (
    <div
      ref={viewDivRef}
      style={{ height: "110vh", width: "100%", margin: 0, padding: 0 }}
    />
  );
};

export default MapWithMarkers;
