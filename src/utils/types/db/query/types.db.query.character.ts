export interface CharacterType {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  created: Date;
}

export interface CharacterDataType {
  character: CharacterType;
}
