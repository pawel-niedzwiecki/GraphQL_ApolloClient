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

const ComponentBoxCharacter = ({
  statusType = ComponentStatusEnumTypes.succes,
  statusName = "ALIFE",
  srcImage = null,
  nameCharacter = "No name",
  params = null,
  url = "/",
}: ComponentBoxCharacterPropsTypes): JSX.Element => {
  return (
    <Box>
      <Status statusName={statusName} type={statusType} style={{ position: "absolute", right: "1.5rem", top: "1.5rem", zIndex: "99" }} />
      <BoxImage type={ComponentBoxImageEnumTypes.thumbnail} src={srcImage} />
      <NameCharacter>{nameCharacter}</NameCharacter>
      {params?.length && (
        <List type={ConponentListEnumTypes.level} selector="#">
          {params.map((item: string, _: number): JSX.Element => {
            if (!!item?.length) return <>{item}</>;
            else return <>NO DATA</>;
          })}
        </List>
      )}

      <Button href={url} title="more">
        MORE
      </Button>
    </Box>
  );
};

export default ComponentBoxCharacter;
