import React from "react";
import Link from "next/link";
import { Button } from "./component.button.style";
import { ButtonTypes } from "./component.button.types";

const ComponentButton = ({ id, href, title, children }: ButtonTypes): JSX.Element => {
  return (
    <Link id={id} href={href} title={title} passHref>
      <Button>{children}</Button>
    </Link>
  );
};

export default ComponentButton;
