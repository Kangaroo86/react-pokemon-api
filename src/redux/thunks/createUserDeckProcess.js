import createUserDeck from '../../api/createUserDeck';

export default function createUserDeckProcess(deckName, pokemonIds) {
  return (dispatch, getState, env) => {
    return createUserDeck(deckName, pokemonIds, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(createdUserDeck => {
        return createdUserDeck;
      })
      .catch(error => {
        console.error('getUserDecksProcess: Couldnt fetch createDeck: ', error);
      });
  };
}
