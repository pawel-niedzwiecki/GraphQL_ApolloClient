import React from "react";
import Img from "next/image";
import { Box, Demo } from "./component.boxImage.style";
import { ComponentBoxImagePropsTypes } from "./component.boxImage.types";

const ComponentBoxImage = ({ type, url }: ComponentBoxImagePropsTypes): JSX.Element => {
  return <Box type={type}>{!!url ? <Img src={url} layout="fill" /> : <Demo>NO IMG</Demo>}</Box>;
};

export default ComponentBoxImage;
