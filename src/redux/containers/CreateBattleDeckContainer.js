import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import getUserDecksProcess from '../thunks/getUserDecksProcess';
import CreateBattlePageComponent from '../../components/CreateBattlePageComponent';
import getPokemonProcess from '../thunks/getPokemonProcess';

function mapStateToProps(state, ownProps) {
  return {
    userDecks: state.userDecks,
    getPokemonObj: state.getPokemonObj
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetch_user_decks: () => dispatch(getUserDecksProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//you only user dismount when you want an api continous to send data
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.fetch_user_decks();
  }
});

export default compose(connectToStore, onDidMount)(CreateBattlePageComponent);
