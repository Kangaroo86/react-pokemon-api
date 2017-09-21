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
      //console.log('rootReducer: GET_POKEMON with action ', action);
      return { ...currentState, getPokemonObj: action.getPokemonObj };

    case 'FETCHED_USER_DECKS':
      console.log('rootReducer: FETCHED_USER_DECKS with action ', action);
      return { ...currentState, userDecks: action.userDecks };

    case 'CREATED_USER_DECK':
      console.log('rootReducer: CREATED_USER_DECK with action ', action);
      return {
        ...currentState,
        createDeck: [...currentState.createDeck, action.createDeck]
      };

    //TODO WIP
    case 'DELETE_USER_DECK':
      console.log('rootReducer: DELETE_USER_DECK with action ', action);
      return {
        ...currentState,
        createDeck: [...currentState.createDeck, action.createDeck]
      };

    default:
      console.log('rootReducer: default with action ', action);
      return currentState;
  }
}
