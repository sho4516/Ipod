import React from "react";
import "../CSS/menu.css";
import MenuItem from "./MenuItem";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menuItems = this.props.menuItems;
    const active = this.props.active;

    return (
      <div className="menu">
        <div className="menuHeading">
          <h2>IPOD</h2>
        </div>
        <div className="menuItems">
          {menuItems.map((item, index) => {
            return <MenuItem item={item} active={active === index} />;
          })}
        </div>
      </div>
    );
  }
}
