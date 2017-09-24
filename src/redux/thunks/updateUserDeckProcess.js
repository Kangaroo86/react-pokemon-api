import updateUserDeck from '../../api/updateUserDecks';
// import env from '../../../src/env';

export default function updateUserDeckProcess(id, deckName, pokemonIds) {
  return (dispatch, getState, env) => {
    return updateUserDeck(id, deckName, pokemonIds, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(updateResponse => {
      return updateResponse;
    });
  };
}
