import "./App.css";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import MusicTable from "./Components/MusicTable/MusicTable";
import NewSongForm from "./Components/NewSongForm/NewSongForm";
import React, { useState, useEffect } from "react";
import axios from "axios";
//import Textfield from "../Textfield/Textfield";

function App() {
  const [songs, setSongs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7197/api/Songs");
      console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetch Songs request", error);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* <button onClick={fetchSongs}>Search</button> */}

      <MusicTable
        songs={songs}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        searchTerm={searchTerm}
      />
      <NewSongForm onNewSong={fetchSongs} />
    </div>
  );
}

export default App;
