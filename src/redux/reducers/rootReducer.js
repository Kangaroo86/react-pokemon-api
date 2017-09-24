export default function rootReducer(
  currentState = {
    createDeck: null,
    userDecks: []
  },
  action
) {
  switch (action.type) {
    case 'FETCHED_USER_DECKS':
      //console.log('rootReducer: FETCHED_USER_DECKS with action ', action);
      return { ...currentState, userDecks: action.userDecks };

    case 'CREATED_USER_DECK':
      //console.log('rootReducer: CREATED_USER_DECK with action ', action);
      let newUserDecks = [...currentState.userDecks, action.createDeck];
      return { ...currentState, userDecks: newUserDecks };

    case 'DELETE_USER_DECK':
      //console.log('rootReducer: DELETE_USER_DECK with action ', action);
      newUserDecks = currentState.userDecks.filter(userDeck => {
        return userDeck.id !== action.id;
      });
      return { ...currentState, userDecks: newUserDecks };

    //case 'UPDATE_USER_DECK':

    default:
      console.log('rootReducer: default with action ', action);
      return currentState;
  }
}
