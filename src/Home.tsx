import { useEffect, useState } from "react";
import Expand from "../src/assets/angles-right-solid.svg";
import Collapse from "../src/assets/angles-left-solid.svg";
import MapWithMarkers from "./components/MapWithMarkers";
import { useSelector } from "react-redux";
import { RootState } from "./store";
const Home: React.FC = () => {
  const [unit, setUnit] = useState("kms");
  const [refreshKey, setRefreshKey] = useState(0);
  const [dist, setDist] = useState<number>(0);
  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };
  const { point1, point2, distance } = useSelector(
    (state: RootState) => state.map
  );
  useEffect(() => {
    setExpended(true);
  }, [distance]);
  useEffect(() => {
    if (unit === "mi") {
      const conversionFactor = 0.621371;
      setDist(distance * conversionFactor);
    } else if (unit === "ms") {
      setDist(distance * 1000);
    } else if (unit === "kms") {
      setDist(distance);
    }
  }, [distance, unit]);
  const [isExpanded, setExpended] = useState<boolean>(false);
  const handleExpand = () => {
    setExpended(!isExpanded);
  };
  return (
    <>
      <main className="hero">
        <article className="cont">
          <aside
            className="side"
            style={{ width: isExpanded ? "auto" : "10px" }}
          >
            <section className="info">
              <h1 className="head">Point 1</h1>
              <h1>Latitude: {point1.latitude.toFixed(4)}</h1>
              <h1>Longitude: {point1.longitude.toFixed(4)}</h1>
              <h1 className="head">Point 2</h1>
              <h1>Latitude: {point2.latitude.toFixed(4)}</h1>
              <h1>Longitude: {point2.longitude.toFixed(4)}</h1>
              <h1 className="head">
                Distance: {dist.toFixed(4)} {unit}
              </h1>
              <section className="conv">
                <button
                  className={unit === "ms" ? "active" : "inactive"}
                  onClick={() => {
                    setUnit("ms");
                  }}
                >
                  Meters
                </button>
                <button
                  className={unit === "kms" ? "active" : "inactive"}
                  onClick={() => {
                    setUnit("kms");
                  }}
                >
                  Kilometers
                </button>
                <button
                  className={unit === "mi" ? "active" : "inactive"}
                  onClick={() => {
                    setUnit("mi");
                  }}
                >
                  Miles
                </button>
              </section>
            </section>
          </aside>
          <section className="expand" onClick={handleExpand}>
            <img src={isExpanded ? Collapse : Expand} alt="" />
          </section>
        </article>
        <article className="map">
          <MapWithMarkers key={refreshKey} />
        </article>
        <button className="reset" onClick={handleRefresh}>
          Reset
        </button>
      </main>
    </>
  );
};

export default Home;
