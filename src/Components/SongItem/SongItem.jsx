import React, { useState } from "react";
import "./SongItem.css";

const SongItem = ({ title, activeIndex, setActiveIndex, index }) => {};

const handleActive = () => {
  setActiveIndex(index);
};

return (
  <div onClick={handleActive} className={`song-item ${activeClass}`}>
    <span>{title}</span>
    <button className={btnClass} onClick={handleDelete}>
      {" "}
      Delete{" "}
    </button>
    <button className={btnClass} onClick={handleEdit}>
      {" "}
      Edit{" "}
    </button>
  </div>
);
export default SongItem;
