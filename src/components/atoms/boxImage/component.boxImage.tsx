import React from "react";
import Img from "next/image";
import { Box } from "./component.boxImage.style";
import { ComponentBoxImagePropsTypes } from "./component.boxImage.types";

const ComponentBoxImage = ({ type, url }: ComponentBoxImagePropsTypes): JSX.Element => {
  return <Box type={type}>{!!url ? <Img src={url} layout="fill" /> : "Rick"}</Box>;
};

export default ComponentBoxImage;
