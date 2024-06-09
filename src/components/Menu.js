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
    const backNavigable = this.props.backNavigable;
    const handleBack = this.props.handleBack;

    return (
      <div className="menu">
        <div className="menuHeading">
          {backNavigable && (
            <div onClick={handleBack} className="back">
              <i class="fa-solid fa-left-long"></i>
            </div>
          )}
          <div>
            <h2>Ipod</h2>
          </div>
        </div>
        <div className="menuItems">
          {menuItems.map((item, index) => {
            return <MenuItem item={item.name} active={active === index} />;
          })}
        </div>
      </div>
    );
  }
}
