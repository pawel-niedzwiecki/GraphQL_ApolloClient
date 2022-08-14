import React from "react";
import Img from "next/image";
import { Box, Demo } from "./component.boxImage.style";
import { ComponentBoxImagePropsTypes } from "./component.boxImage.types";

const ComponentBoxImage = ({ type, src }: ComponentBoxImagePropsTypes): JSX.Element => {
  return <Box type={type}>{!!src ? <Img src={src} layout="fill" objectFit="cover" priority /> : <Demo>NO IMG</Demo>}</Box>;
};

export default ComponentBoxImage;
