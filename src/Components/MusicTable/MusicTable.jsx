import "./MusicTable.css";

const MusicTable = ({}) => {

const api_url = "https://localhost:7197/api/Songs";
const songItems = songs.map((song)) => {song};

async function getapi(url) {
    const response =await fetch(url);
}



  return (
    <table>
      <h2>Music Collection</h2>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>Genre</th>
        <th>Release Date</th>
      </tr>
      for (let r of data.list){" "}
      {
        (tab += (
          <tr>
            <td>${r.title}</td>
            <td>${r.artist}</td>
            <td>${r.album}</td>
            <td>${r.genre}</td>
            <td>${r.releaseDate}</td>
          </tr>
        ))
      }
    </table>
  );
};
export default MusicTable;
