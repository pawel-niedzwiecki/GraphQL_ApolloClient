import React from "react";
import Link from "next/link";
import { Button } from "./component.button.style";

const ComponentButton = ({ href, title, children }: { href: string; title: string; children: JSX.Element | string }): JSX.Element => {
  return (
    <Link href={href} title={title} passHref>
      <Button>{children}</Button>
    </Link>
  );
};

export default ComponentButton;
