import React from "react";
import "../CSS/coverflow.css";

export default class Games extends React.Component {
  render() {
    return (
      <div className="coverFlowContainer">
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?cs=srgb&dl=pexels-pixabay-275033.jpg&fm=jpg"
            alt="Game-Image"
          ></img>
        </div>
      </div>
    );
  }
}
