import React from "react";
import { Button } from "./component.button.style";

const ComponentButton = ({ href, title, children }: { href: string; title: string; children: JSX.Element | string }): JSX.Element => {
  return (
    <Button href={href} title={title}>
      {children}
    </Button>
  );
};

export default ComponentButton;
