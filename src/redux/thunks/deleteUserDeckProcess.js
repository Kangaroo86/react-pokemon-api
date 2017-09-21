import createUserDeck from '../../api/deleteUserDeck';

export default function deleteUserDeckProcess(id) {
  return (dispatch, getState, env) => {
    return createUserDeck(id, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(deleteDeckResponse => {
        console.log('deleteDeck response:------ ', deleteDeckResponse);
      })
      .catch(error => {
        console.error('getUserDecksProcess: Couldnt fetch createDeck: ', error);
        // dispatch({ type: 'CREATE_NOTE_FAILED' });
      });
  };
}
