import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import IndexPage from '../../components/IndexPage';
import getUserDecksProcess from '../thunks/getUserDecksProcess';
import getPokemonProcess from '../thunks/getPokemonProcess';
import deleteUserDeckProcess from '../thunks/deleteUserDeckProcess';
import updateUserDeckProcess from '../thunks/updateUserDeckProcess';

function mapStateToProps(state, ownProps) {
  return {
    userDecks: state.userDecks //A thunk: getUserDecksProcess(). Get decks API from airtable
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetch_user_decks: () => dispatch(getUserDecksProcess()), //getUserDecksProcess is a thunks
    fetch_pokemon_webApi: id => dispatch(getPokemonProcess(id)), //getPokemonProcess is a thunks
    onDelete: id => dispatch(deleteUserDeckProcess(id)),
    onUpdate: (id, deckName, pokemonIds) =>
      dispatch(updateUserDeckProcess(id, deckName, pokemonIds))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//Lifecycle allow the api continues to run right when the web starts
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.fetch_user_decks();
  }
});

export default compose(connectToStore, onDidMount)(IndexPage);
