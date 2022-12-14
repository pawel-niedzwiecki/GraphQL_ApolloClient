import React from "react";
import Col from "./component.col.style";
import { ColComponentPropsTypes } from "./component.col.types";

const ColComponent = ({ children, style, className, ref, xs, sm, md, lg, xl, xxl }: ColComponentPropsTypes): JSX.Element => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} style={style} className={className} ref={ref}>
      {children}
    </Col>
  );
};

export default ColComponent;
