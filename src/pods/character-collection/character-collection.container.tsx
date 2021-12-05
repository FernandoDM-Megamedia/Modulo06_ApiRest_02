import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';

import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
    console.log(characterCollection);
  }, []);

  const handleCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleView = (id: number) => {
    history.push(linkRoutes.editCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onView={handleView}
    />
  );
};
