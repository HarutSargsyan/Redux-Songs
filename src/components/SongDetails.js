import React from "react";
import { useSelector } from "react-redux";

const divStyle = {
  backgroundColor: "rgba(255, 128, 0,0.8)",
  textAlign: "center",
  height: "160px",
  paddingLeft: "20px",
};

const SongDetail = () => {
  const song = useSelector((state) => state.selectedSong);
  if (!song) {
    return <div>There is no song</div>;
  }
  return (
    <div style={divStyle}>
      <h3
        style={{
          fontSize: "30px",
        }}
      >
        Details for:
      </h3>
      <p
        style={{
          fontFamily: "lato",
          letterSpacing: "1px",
        }}
      >
        Title: {song.title}
        <br />
        <br />
        Singer:{song.singer}
        <br />
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

export default SongDetail;
