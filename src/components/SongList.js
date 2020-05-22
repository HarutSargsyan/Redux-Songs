import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions/index";

class SongList extends Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className=" item" key={song.title}>
          <div className="right floated content">
            <button 
                className="ui button primary"
                onClick = {() => this.props.selectSong(song)}
            >Select</button>
          </div>
          <div className="content"> {song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  const { songs } = state
  return { songs };
};
//we get our store's songs



export default connect(mapStateToProps,{ selectSong })(SongList);
//we convert our state's songs value to prop