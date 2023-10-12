import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";

const NewSongForm = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [album, setAlbum] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      genre,
      album,
      releaseDate,
    };

    try {
      const response = await axios.post(
        "https://localhost:7197/api/Songs",
        formData
      );
      if (response.status === 201) {
        onNewSong();
      }
    } catch (error) {
      console.warn("Error submitting new song form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Song</h4>
      <div className="p-2">
        <TextField label="Title" value={title} onChange={setTitle} />
        <TextField label="Artist" value={artist} onChange={setArtist} />
        <TextField label="Genre" value={genre} onChange={setGenre} />
        <TextField label="Album" value={album} onChange={setAlbum} />
        <TextField
          label="Release Date"
          value={releaseDate}
          onChange={setReleaseDate}
        />
        <div className="d-flex justify-content-end">
          <button className="btn btn-priamry" type="submit">
            Add Song
          </button>
        </div>
      </div>
    </form>
  );
};
export default NewSongForm;
