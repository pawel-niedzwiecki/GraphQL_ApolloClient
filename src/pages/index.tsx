import type { NextPage } from "next";
import { Row, Col } from "components/molecules/gridSystem";
import { client } from "utils/dataBase/client/apollo-client";
import { ComponentStatusEnumTypes } from "components/atoms/status/component.status.types";
import BoxCharacter from "components/organisms/boxCharacter/component.boxCharacter";
import { CharactersDataType, CharacterType } from "utils/types/db/query/types.db.query.characters";
import { GET_CHARACTERS } from "utils/dataBase/query/utils.db.query.characters";

interface PageHomePropsTypes {
  data: CharactersDataType;
}

const Home: NextPage<PageHomePropsTypes, JSX.Element> = ({ data }: { data: CharactersDataType }): JSX.Element => {
  return (
    <Row>
      {data?.characters?.results.map((character: CharacterType, i: number): JSX.Element => {
        return (
          <Col xs={12} md={6} xl={4} key={i}>
            <BoxCharacter
              url="/character/1"
              statusName="ALIFE"
              nameCharacter={character.name}
              params={[<>param 1</>, <>param 2</>]}
              srcImage={character?.image ? character?.image : null}
              statusType={character?.status ? ComponentStatusEnumTypes.succes : ComponentStatusEnumTypes.desactive}
            />
          </Col>
        );
      })}
    </Row>
  );
};

interface PropsTypes {
  props: { data: CharactersDataType };
}

export async function getStaticProps(): Promise<PropsTypes> {
  const { data } = await client.query({ query: GET_CHARACTERS, variables: { page: 1, name: "" } });

  return {
    props: {
      data,
    },
  };
}

export default Home;
