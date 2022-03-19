import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Episode from "./Pages/Episode/Episode";
import axios from "axios";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [selected, setSelected] = useState([]);

  // console.log(selected);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad"
      );
      setEpisodes(data);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/main"
          element={
            <Main
              episodes={episodes}
              setSelected={setSelected}
              selected={selected}
            />
          }
        />
        <Route path="/episode/:id" element={<Episode episodes={episodes} />} />
      </Routes>
      <div className="dsaasd"></div>
    </div>
  );
}

export default App;
