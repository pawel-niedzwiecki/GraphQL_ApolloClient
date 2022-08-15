import React from "react";
import Link from "next/link";
import { ButtonLink } from "./component.button.style";
import { ButtonLinkTypes } from "./component.button.types";

const ComponentButton = ({ id, disable = false, href, title, children }: ButtonLinkTypes): JSX.Element => {
  return (
    <Link id={id} href={href} passHref>
      <ButtonLink disable={disable} title={title} onClick={(e) => disable && e.preventDefault()}>
        {children}
      </ButtonLink>
    </Link>
  );
};

export default ComponentButton;
