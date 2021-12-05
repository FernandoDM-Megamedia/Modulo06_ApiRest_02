import * as apiModel from './api/character-collectionRM.api-model';
import * as viewModel from './character-collection.vm';

export const characterMapFromApiToVm = (
  character: apiModel.CharacterEntityApiRM
): viewModel.CharacterEntityVmRM => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
  comment: character.comment,
});
