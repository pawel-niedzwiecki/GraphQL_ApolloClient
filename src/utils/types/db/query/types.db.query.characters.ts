import { CharacterType } from "./types.db.query.character";

export interface InfoCharactersType {
  next: number;
  count: number;
  pages: number;
}

export interface CharactersType {
  results: CharacterType[];
  info: InfoCharactersType;
}

export interface CharactersDataType {
  characters: CharactersType;
}
