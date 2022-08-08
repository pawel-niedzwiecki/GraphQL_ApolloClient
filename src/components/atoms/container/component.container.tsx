import React from "react";
import Container from "./component.container.style";
import { ContainerComponentPropsTypes } from "./component.container.types";

const ContainerComponent = ({ size, style, className, children }: ContainerComponentPropsTypes): JSX.Element => {
  return (
    <Container size={size} style={style} className={className}>
      {children}
    </Container>
  );
};

// export new component
export default ContainerComponent;
