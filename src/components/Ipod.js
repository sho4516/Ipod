import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import "../CSS/ipod.css";
import Coverflow from "./Coverflow";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";

const menuItems = [
  { name: "Coverflow", component: Coverflow },
  {
    name: "Music",
    component: Music,
    submenu: [
      { name: "All Songs", component: "" },
      { name: "Artists", component: "" },
      { name: "Albums", component: "" },
    ],
  },
  { name: "Games", component: Games },
  { name: "Settings", component: Settings },
];

export default class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      menuActive: false,
      menuStack: [{ items: menuItems, activeIndex: 0 }],
      menuItemSelected: false,
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

    const { menuStack } = this.state;
    const currentMenu = menuStack[menuStack.length - 1];
    const maxIndex = currentMenu.items.length - 1;
    let newIndex = currentMenu.activeIndex;
    if (direction === "clockwise") {
      newIndex = newIndex === maxIndex ? 0 : newIndex + 1;
    } else if (direction === "counterclockwise") {
      newIndex = newIndex === 0 ? maxIndex : newIndex - 1;
    }

    this.setState((prevState) => {
      const newMenuStack = [...prevState.menuStack];
      newMenuStack[newMenuStack.length - 1].activeIndex = newIndex;
      return { menuStack: newMenuStack };
    });
  };

  handleOkClick = () => {
    if (!this.state.menuActive) {
      return;
    }

    const { menuStack } = this.state;
    const currentMenu = menuStack[menuStack.length - 1];
    const index = currentMenu.activeIndex;
    const selectedMenu = currentMenu.items[index];
    if (!selectedMenu.submenu) {
      this.setState({
        menuItemsDetailsSelected: selectedMenu.component,
        menuItemSelected: true,
        menuActive: false,
      });
    } else {
      this.setState((prev) => {
        const newStack = [...prev.menuStack];
        newStack.push({ items: selectedMenu.submenu, activeIndex: 0 });
        return {
          menuStack: newStack,
        };
      });
    }
  };

  handleBack = () => {
    const { menuStack } = this.state;
    if (menuStack.length <= 1) return;
    this.setState((prev) => {
      const newState = [...prev.menuStack];
      newState.pop();
      return {
        menuStack: newState,
        menuActive: true,
        menuItemSelected: false,
        menuItemsDetailsSelected: null,
      };
    });
  };

  render() {
    const {
      menuActive,
      menuStack,
      menuItemSelected,
      menuItemsDetailsSelected,
    } = this.state;
    const currentMenu = menuStack[menuStack.length - 1];
    return (
      <div className="ipod">
        <Display
          menuActive={menuActive}
          menuItems={currentMenu.items}
          active={currentMenu.activeIndex}
          menuItemSelected={menuItemSelected}
          menuItemsDetailsSelected={menuItemsDetailsSelected}
          backNavigable={menuStack.length > 1}
          handleBack={this.handleBack}
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
