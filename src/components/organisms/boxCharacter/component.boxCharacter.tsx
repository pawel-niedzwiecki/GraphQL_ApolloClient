import React from "react";
import { Status } from "./component.boxCharacter.style";
import { ComponentStatusPropsTypes } from "./component.boxCharacter.types";

const ComponentBoxCharacter = ({ statusName, type }: ComponentStatusPropsTypes): JSX.Element => {
  return <Status type={type}>{statusName}</Status>;
};

export default ComponentBoxCharacter;
