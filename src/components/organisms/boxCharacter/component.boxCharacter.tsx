import React from "react";
import { Box, NameCharacter } from "./component.boxCharacter.style";
import Status from "components/atoms/status/component.status";
import { ComponentStatusEnumTypes } from "components/atoms/status/component.status.types";
import List from "components/atoms/list/component.list";
import { ConponentListEnumTypes } from "components/atoms/list/component.list.types";
import BoxImage from "components/atoms/boxImage/component.boxImage";
import { ComponentBoxImageEnumTypes } from "components/atoms/boxImage/component.boxImage.types";
import { ComponentBoxCharacterPropsTypes } from "./component.boxCharacter.types";
import Button from "components/atoms/button/component.button";

const ComponentBoxCharacter = ({}: ComponentBoxCharacterPropsTypes): JSX.Element => {
  return (
    <Box>
      <Status
        statusName="ALIFE"
        type={ComponentStatusEnumTypes.succes}
        style={{ position: "absolute", right: "1.5rem", top: "1.5rem", zIndex: "99" }}
      />
      <BoxImage type={ComponentBoxImageEnumTypes.thumbnail} />
      <NameCharacter>Rick Shanhes</NameCharacter>
      <List type={ConponentListEnumTypes.level} selector="#">
        <>xw</>
        <>xw</>
        <>xw</>
        <>xw</>
      </List>
      <Button href="/" title="more">
        MORE
      </Button>
    </Box>
  );
};

export default ComponentBoxCharacter;
