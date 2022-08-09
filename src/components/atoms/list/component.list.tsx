import React from "react";
import { List, Item } from "./component.list.style";
import { ComponentListPropsTypes } from "./component.list.types";

const ComponentList = ({ type, selector, children }: ComponentListPropsTypes): JSX.Element => {
  return (
    <List type={type}>
      {Array.isArray(children) ? (
        children.map((item: JSX.Element, i: number): JSX.Element => {
          return (
            <Item key={i}>
              {selector && <span>{selector}</span>}
              {item}
            </Item>
          );
        })
      ) : (
        <Item>{children}</Item>
      )}
    </List>
  );
};

export default ComponentList;
