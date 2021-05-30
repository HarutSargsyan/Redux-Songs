import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSong } from "../actions/index";

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs)
  const renderList = () => {
    return songs.map((song) => {
      return (
        <div className=" item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => dispatch(selectSong(song))}
            >
              Select
            </button>
          </div>
          <div className="content"> {song.title}</div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};
//we get our store's song

export default SongList;
//we convert our state's songs value to prop
