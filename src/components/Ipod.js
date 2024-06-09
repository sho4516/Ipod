import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import "../CSS/ipod.css";
import Coverflow from "./Coverflow";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";

const menuItems = [
    {name: "Coverflow", component: Coverflow},
    {name: "Music", component: Music, submenu:[
        {name: "All Songs", component:""},
        {name: "Artists", component:""},
        {name: "Albums", component:""}
    ]},
    {name: "Games", component: Games},
    {name: "Settings", component: Settings}
]

export default class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      menuActive: false,
      menuItems: ["Coverflow", "Music", "Games", "Settings"],
      active: 0,
      menuItemSelected: false,
      menuItemsDetails: [Coverflow, Music, Games, Settings],
      menuItemsDetailsSelected: null,
    };
  }

  toggleMenuActive = () => {
    this.setState((prev) => {
      return { menuActive: !prev.menuActive, menuItemSelected: false };
    });
  };

  handleRotate = (direction) => {
    if (!this.state.menuActive) return;

    this.setState((prevState) => {
      const maxIndex = prevState.menuItems.length - 1;
      let newIndex = prevState.active;
      if (direction === "clockwise") {
        newIndex = newIndex === maxIndex ? 0 : newIndex + 1;
      } else if (direction === "counterclockwise") {
        newIndex = newIndex === 0 ? maxIndex : newIndex - 1;
      }
      return { active: newIndex };
    });
  };

  handleOkClick = () => {
    if (!this.state.menuActive) {
      return;
    }
    const index = this.state.active;
    const menuItemsDetailsSelected = this.state.menuItemsDetails[index];
    this.setState({
      menuItemsDetailsSelected,
      menuItemSelected: true,
      menuActive: false,
    });
  };

  render() {
    return (
      <div className="ipod">
        <Display
          menuActive={this.state.menuActive}
          menuItems={this.state.menuItems}
          active={this.state.active}
          menuItemSelected={this.state.menuItemSelected}
          menuItemsDetailsSelected={this.state.menuItemsDetailsSelected}
        />
        <Wheel
          onClickMenu={this.toggleMenuActive}
          onRotate={this.handleRotate}
          handleOkClick={this.handleOkClick}
        />
      </div>
    );
  }
}
