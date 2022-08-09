import React from "react";
import Link from "next/link";
import { Button } from "./component.button.style";
import { ButtonTypes } from "./component.button.types";

const ComponentButton = ({ id, disable = false, href, title, children }: ButtonTypes): JSX.Element => {
  return (
    <Link id={id} href={href} onClick={(e) => disable && e.preventDefault()} passHref>
      <Button disable={disable} title={title}>
        {children}
      </Button>
    </Link>
  );
};

export default ComponentButton;