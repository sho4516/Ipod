import React from "react";
import ZingTouch from "zingtouch";
import "../CSS/wheel.css";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const wheel = document.querySelector(".wheelContainer");
    const activeRegion = ZingTouch.Region(wheel);
    activeRegion.bind(wheel, "rotate", (e) => {
      this.handleRotate(e);
    });
  }

  handleRotate = (e) => {
    if (e.detail.distanceFromOrigin === 0) {
      this.angle = e.detail.angle;
    }
    if (Math.abs(this.angle - e.detail.angle) > 300) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast < 0) {
        this.props.onRotate("clockwise");
      } else {
        this.props.onRotate("counterclockwise");
      }
    } else if (Math.abs(this.angle - e.detail.angle) > 15) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast > 0) {
        this.props.onRotate("clockwise");
      } else {
        this.props.onRotate("counterclockwise");
      }
    }
  };

  render() {
    return (
      <div className="wheelContainer">
        <div onClick={this.props.handleOkClick} className="centreButton">
          <div className="text">OK</div>
        </div>
        <div className="wheel-controls">
          <div className="control" id="menu">
            <div onClick={this.props.onClickMenu} className="text">
              MENU
            </div>
          </div>
          <div className="control" id="forward">
            <div className="text">
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
          <div className="control" id="backward">
            <div className="text">
              <i className="fa-solid fa-backward"></i>
            </div>
          </div>
          <div className="control" id="play_pause">
            <div className="text">
              <i className="fa-solid fa-play"></i>
            </div>
            <div className="text">
              <i className="fa-solid fa-pause"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
