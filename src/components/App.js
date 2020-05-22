import React from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetails";

const divStyle = {
  marginTop: "25px",
};

const App = () => {
  return (
    <div style={divStyle} className="ui container grid">
      <div style={{
        display:'flex',
        justifyContent:'spaceAround'
      }} className="ui row">
        <div className="column four wide">
          <SongList />
        </div>
        <div className="column four wide">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
