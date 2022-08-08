import React from "react";
import Row from "./component.row.style";
import { RowPropsTypes } from "./component.row.types";

const RowComponent = ({ children, style }: RowPropsTypes): JSX.Element => {
  return <Row style={style}>{children}</Row>;
};

export default RowComponent;
