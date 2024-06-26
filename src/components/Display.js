import React from "react";
import "../CSS/display.css";
import Wallpaper from "./Wallpaper";
import Menu from "./Menu";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      menuItemSelected,
      menuItemsDetailsSelected,
      menuActive,
      menuItems,
      active,
      backNavigable,
      handleBack,
      properties,
      onSongSelect
    } = this.props;

    return (
      <div className="displayContainer">
        {menuItemSelected &&
          menuItemsDetailsSelected &&
          React.createElement(menuItemsDetailsSelected, {...properties, onSongSelect: onSongSelect})}
        {!menuItemSelected && <Wallpaper />}
        {menuActive && <Menu menuItems={menuItems} active={active} backNavigable={backNavigable} handleBack={handleBack}/>}
      </div>
    );
  }
}
