import React from "react";
import styled from "styled-components";

const MenuIitem = styled.div`
  padding: 1rem 0;
  padding-left: 4px;
  width: 98%%;
  display: flex;
  align-items: center;
  color: ${(props) => (props.active ? "white" : "black")};
  background-color: ${(props) => (props.active ? "blue" : "white")};
`;

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const active = this.props.active;
    return <MenuIitem active={active}>{item}</MenuIitem>;
  }
}
