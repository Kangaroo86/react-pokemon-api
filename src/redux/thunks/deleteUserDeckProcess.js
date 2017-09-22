import deleteUserDeck from '../../api/deleteUserDeck';

export default function deleteUserDeckProcess(id) {
  return (dispatch, getState, env) => {
    return deleteUserDeck(id, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(result => {
      dispatch({ type: 'DELETE_USER_DECK', id });
      return result;
    });
  };
}
