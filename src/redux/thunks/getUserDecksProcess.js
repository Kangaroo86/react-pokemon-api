//this a thunks processing the getUserDecks API fetch call.
//return user's id. name, wins, losses, cards
import getUserDecks from '../../api/getUserDecks';
// import getPokemonProcess from './getPokemonProcess';
import getPokemon from '../../api/getPokemon';

export default function getUserDecksProcess() {
  return (dispatch, getState, env) => {
    const scope = {};
    return getUserDecks({
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(userDecks => {
        console.log('getUserDecksProcess thunk:', userDecks);
        scope.userDecks = userDecks;
        // if (!Array.isArray(userDecks)) {
        //   console.error(
        //     'getUserDecks: userDecks was not an array: ',
        //     userDecks
        //   );
        //   throw { error: 'getUserDecks: userDecks was not an array!' };
        // }

        const promises = [];
        userDecks.forEach(userDeck => {
          const ids = userDeck.fields.cards
            ? userDeck.fields.cards.split(',').map(id => parseInt(id, 10))
            : [];
          userDeck.fields.cards = ids;
          ids.forEach(id => {
            promises.push(getPokemon(id));
          });
        });

        return Promise.all(promises);
        //getPokemonProcess is receiving pokemon id through userDecks
        // userDecks.map(deckData => {
        //   // console.log('this is a deck')
        //   dispatch(getPokemonProcess(deckData));
        // });
      })
      .then(characters => {
        console.log(characters, '<<<<<<<');

        scope.userDecks.forEach(userDeck => {
          userDeck.fields.cards = userDeck.fields.cards.map(id =>
            characters.find(character => character.id === id)
          );
        });

        dispatch({ type: 'FETCHED_USER_DECKS', userDecks: scope.userDecks });
      })
      .catch(error => {
        console.error('getUserDecksProcess: Couldnt fetch userDecks: ', error);
      });
  };
}
