import React from "react";
import "../CSS/allsongs.css";

export default class AllSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: null };
  }

  handleClick = (index, song) => {
    this.setState({ activeIndex: index });
    this.props.onSongSelect(song);
  };

  render() {
    console.log(this.props);
    const { songs } = this.props;
    return (
      <div className="allSongsContainer">
        <h3>All Songs</h3>
        <ul>
          {songs.map((song, index) => (
            <li key={index} className={index === this.state.activeIndex?"active":""} onClick={() => this.handleClick(index, song)}>
              {song.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
