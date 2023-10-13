import "./App.css";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import MusicTable from "./Components/MusicTable/MusicTable";
import NewSongForm from "./Components/NewSongForm/NewSongForm";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7197/api/Songs");
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetch Songs request", error);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);

  const selectedSong = songs[activeIndex];

  return (
    <div className="App">
      <Header />
      {/* <SearchBar /> */}
      {/* <MusicTable
        songs={songs}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      /> */}
      <NewSongForm onNewSong={fetchSongs} />
    </div>
  );
}

export default App;
