import { Col } from "components/molecules/gridSystem";
import Pagination from "components/organisms/pagination/component.pagination";
import BoxCharacter from "components/organisms/boxCharacter/component.boxCharacter";
import { ComponentStatusEnumTypes } from "components/atoms/status/component.status.types";
import { PaginationPropsTypes } from "components/organisms/pagination/component.pagination.types";
import { CharactersDataType, CharacterType } from "utils/types/db/query/types.db.query.characters";

import { Section } from "./component.section.charactersList.style";

export default function ComponentSectionCharactersList({ data }: { data: CharactersDataType }) {
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

      <Col xs={12} style={{ margin: "1.5rem 0" }}>
        <Pagination
          url="/"
          paginationSize={3}
          pageCount={data?.characters?.info?.pages || 1}
          pageActive={data?.characters?.info?.next - 1 || 0}
        />
      </Col>
    </Section>
  );
}
