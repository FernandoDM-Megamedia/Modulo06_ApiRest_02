import { CharacterEntityApiRM } from './character.api-model';
import Axios from 'axios';

const characterListUrl = '/api/characters';
// const characterListUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<CharacterEntityApiRM> => {

  const response  = await fetch(`${characterListUrl}/${id}`);

  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};



export const saveCharacter = async (character: CharacterEntityApiRM): Promise<boolean> => {

  if (character.id) {
    // put
    await Axios.put<CharacterEntityApiRM>(`${characterListUrl}/${character.id}`, character);
  } else {
    await Axios.post<CharacterEntityApiRM>(characterListUrl, character);
  }
  return true
};