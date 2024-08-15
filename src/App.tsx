import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./Home";
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching data, initializing something)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);
  return <>{isLoading ? <Loading /> : <Home />}</>;
};

export default App;
