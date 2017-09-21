import createUserDeck from '../../api/createUserDeck';

// TODO WIP
// Once we get the userDeck response back, we'll need to add it to the state.userDecks list.

export default function createUserDeckProcess(deckName, pokemonIds) {
  return (dispatch, getState, env) => {
    return createUserDeck(deckName, pokemonIds, {
      // TODO implement createUserDeck
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(createdUserDeck => {
        //console.log('createDeck response:------ ', createdUserDeck);
        return createdUserDeck;
      })
      .catch(error => {
        console.error('getUserDecksProcess: Couldnt fetch createDeck: ', error);
      });
  };
}
