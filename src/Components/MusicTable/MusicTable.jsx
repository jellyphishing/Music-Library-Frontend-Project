import "./MusicTable.css";

const MusicTable = ({ songs, searchTerm }) => {
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.releaseDate.includes(searchTerm)
  );
  const songItems = filteredSongs.map((song) => (
    <tr>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.genre}</td>
      <td>{song.releaseDate}</td>
    </tr>
  ));

  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border">
        <h2>Music Collection</h2>
        <table>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
          {songItems}
        </table>
      </div>
    </div>
  );
};

export default MusicTable;
