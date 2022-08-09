import React from "react";
import { List, Item } from "./component.list.style";
import { ComponentListPropsTypes } from "./component.list.types";

const ComponentList = ({ type, selector, children }: ComponentListPropsTypes): JSX.Element => {
  return (
    <List type={type}>
      {children.map((item: JSX.Element, i: number): JSX.Element => {
        return (
          <Item key={i}>
            <span>{selector}</span>
            {item}
          </Item>
        );
      })}
    </List>
  );
};

export default ComponentList;
