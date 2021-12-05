import { CharacterEntityApiRM, InfoEntityApiRM } from './character-collectionRM.api-model';

const urlcharacter = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApiRM[]> => {
  console.log('leemos datos moch del json-server');
  // return fetch((urlcharacter)).then(character => character.json().then(data => data.characters))
  const response  = await fetch(urlcharacter);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};
