export default function rootReducer(
  currentState = {
    createDeck: null,
    userDecks: [],
    getPokemonObj: {}
  },
  action
) {
  switch (action.type) {
    case 'GET_POKEMON':
      console.log('rootReducer: GET_POKEMON with action ', action);
      return { ...currentState, getPokemonObj: action.getPokemonObj };

    case 'FETCHED_USER_DECKS':
      console.log('rootReducer: FETCHED_USER_DECKS with action ', action);
      return { ...currentState, userDecks: action.userDecks };

    case 'CREATED_USER_DECK':
      console.log('rootReducer: CREATED_USER_DECK with action ', action);
      let newUserDecks = [...currentState.userDecks, action.createDeck];
      return { ...currentState, userDecks: newUserDecks };

    case 'DELETE_USER_DECK':
      console.log('rootReducer: DELETE_USER_DECK with action ', action);
      newUserDecks = currentState.userDecks.filter(userDeck => {
        return userDeck.id !== action.id;
      });
      return { ...currentState, userDecks: newUserDecks };

    default:
      console.log('rootReducer: default with action ', action);
      return currentState;
  }
}
