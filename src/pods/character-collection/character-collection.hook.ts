import { useState } from 'react';
import { CharacterEntityVmRM} from './character-collection.vm';
import { getCharacterCollection } from './api';
import { characterMapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = useState<CharacterEntityVmRM[]>(
    []
  );

  const loadCharacterCollection = () => {
    console.log('loadcharacter--------------------');
    getCharacterCollection().then((results) => 
        setCharacterCollection(mapToCollection(results, characterMapFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection};
};
