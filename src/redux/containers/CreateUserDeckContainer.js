import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import CreateUserDeckComponent from '../../components/CreateUserDeckComponent';
import createUserDeckProcess from '../thunks/createUserDeckProcess';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    createDeck: (deckName, pokemonIds) =>
      dispatch(createUserDeckProcess(deckName, pokemonIds))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//you only user dismount when you want an api continous to send data
const onDidMount = lifecycle({
  componentDidMount() {}
});

export default compose(connectToStore, onDidMount)(CreateUserDeckComponent);
