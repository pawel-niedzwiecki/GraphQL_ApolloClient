import { Section, NameCharacter, Header, Button, BoxResult } from "./component.section.characterFull.style";
import ImageBox from "components/atoms/boxImage/component.boxImage";
import List from "components/atoms/list/component.list";
import { ConponentListEnumTypes } from "components/atoms/list/component.list.types";
import { ComponentBoxImageEnumTypes } from "components/atoms/boxImage/component.boxImage.types";
import { CharacterDataType } from "utils/types/db/query/types.db.query.character";

import { useLazyQuery } from "@apollo/client";
import { GET_EPISODES } from "utils/dataBase/query/utils.db.query.episots";
import { EpisodeType } from "utils/types/db/query/types.db.query.episotes";

import { QueryResult } from "components/molecules/queryResult/component.queryResult";

export default function ComponentSectionCharacterFull({ data }: { data: CharacterDataType }) {
  const [getEpisodes, { data: EpisodesData, loading: EpisodesLoading, error: EpisodesError }] = useLazyQuery(GET_EPISODES, {
    variables: { id: data.character.id },
  });

  console.log(EpisodesData?.character?.episode?.map((episote: EpisodeType, i: number) => <>{episote.name}</>));
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
      <Button title="show" onClick={() => getEpisodes()}>
        Show All episots
      </Button>

      <BoxResult>
        <QueryResult data={EpisodesData} loading={EpisodesLoading} error={EpisodesError}>
          <List type={ConponentListEnumTypes.vertical} selector="#" style={{ margin: "0 auto" }}>
            {EpisodesData?.character?.episode?.map(
              (episote: EpisodeType, _: number): JSX.Element => (
                <>{episote.name}</>
              )
            )}
          </List>
        </QueryResult>
      </BoxResult>
    </Section>
  );
}
