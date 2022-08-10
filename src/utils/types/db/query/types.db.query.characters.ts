export interface CharacterType {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  created: Date;
}

export interface InfoCharactersDataType {
  next: number;
  pages: number;
}

export interface CharactersDataType {
  characters: { results: CharacterType[]; info: InfoCharactersDataType };
}