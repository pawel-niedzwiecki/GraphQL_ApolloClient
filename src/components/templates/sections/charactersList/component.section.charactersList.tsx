import { Col } from "components/molecules/gridSystem";
import BoxCharacter from "components/organisms/boxCharacter/component.boxCharacter";
import { ComponentStatusEnumTypes } from "components/atoms/status/component.status.types";
import { CharactersDataType } from "utils/types/db/query/types.db.query.characters";
import { CharacterType } from "utils/types/db/query/types.db.query.character";
import { Section } from "./component.section.charactersList.style";
import { useEffect } from "react";

export default function ComponentSectionCharactersList({ data }: { data: CharactersDataType }) {
  useEffect(() => {}, [data]);

  return (
    <Section>
      {data?.characters?.results.map((character: CharacterType, i: number): JSX.Element => {
        return (
          <Col xs={12} md={6} xl={4} key={i}>
            <BoxCharacter
              statusName={character.status}
              nameCharacter={character.name}
              url={`/character/${character.id}`}
              params={[character.species, character.type]}
              srcImage={character?.image ? character?.image : null}
              statusType={character?.status === "Alive" ? ComponentStatusEnumTypes.succes : ComponentStatusEnumTypes.desactive}
            />
          </Col>
        );
      })}
    </Section>
  );
}
