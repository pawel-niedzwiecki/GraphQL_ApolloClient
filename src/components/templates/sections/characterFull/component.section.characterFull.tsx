import { Section, NameCharacter, Header, Button } from "./component.section.characterFull.style";
import ImageBox from "components/atoms/boxImage/component.boxImage";
import List from "components/atoms/list/component.list";
import { ConponentListEnumTypes } from "components/atoms/list/component.list.types";
import { ComponentBoxImageEnumTypes } from "components/atoms/boxImage/component.boxImage.types";
import { CharacterDataType } from "utils/types/db/query/types.db.query.character";

export default function ComponentSectionCharacterFull({ data }: { data: CharacterDataType }) {
  return (
    <Section>
      <ImageBox type={ComponentBoxImageEnumTypes.full} src={data?.character?.image || null} />
      <NameCharacter>{data?.character?.name || "No data"}</NameCharacter>

      <List type={ConponentListEnumTypes.vertical} selector="#" style={{ marginLeft: "1.5rem" }}>
        <>id: {data?.character?.id || "No data"}</>
        <>species: {data?.character?.species || "No data"}</>
        <>status: {data?.character?.status || "No data"}</>
        <>type: {data?.character?.type || "No data"}</>
      </List>

      <Header>Was in episots</Header>
      <Button title="show">Show All episots</Button>
      <List type={ConponentListEnumTypes.vertical} selector="#" style={{ margin: "0 auto" }}>
        <>episot name : {data?.character?.id || "No data"}</>
      </List>
    </Section>
  );
}
