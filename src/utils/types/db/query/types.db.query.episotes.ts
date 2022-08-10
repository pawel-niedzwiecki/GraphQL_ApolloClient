export interface EpisodeType {
  id: string;
  name: string;
}

export interface CharacterEpisodesDataType {
  character: {
    episode: EpisodeType[];
  };
}
