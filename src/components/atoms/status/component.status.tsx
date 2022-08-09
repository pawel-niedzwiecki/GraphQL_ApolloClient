import React from "react";
import { Status } from "./component.status.style";
import { ComponentStatusPropsTypes } from "./component.status.types";

const ComponentStatus = ({ statusName, style, type }: ComponentStatusPropsTypes): JSX.Element => {
  return (
    <Status type={type} style={style}>
      {statusName}
    </Status>
  );
};

export default ComponentStatus;
