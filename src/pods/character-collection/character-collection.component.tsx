import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVmRM } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';


interface Props {
  characterCollection: CharacterEntityVmRM[];
  onView: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onView } = props;
  // const { characterCollection, infoCollection, onEdit, onDelete , onView, onPrevPage, onNextPage} = props;

  return (
    <div className={classes.root}>
      <div>
        <h2>
          Personajes Mock .- 
        </h2>
        <div>

        </div>
        <div className={classes.pagination}>

        </div>
      </div>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onView={onView}/>
            {/* <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} onView={onView}/> */}
          </li>
        ))}
      </ul>
      <div className={classes.pagination}>

      </div>

    </div>
  );
};
