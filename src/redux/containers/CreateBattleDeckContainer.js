import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import CreateBattlePageComponent from '../../components/CreateBattlePageComponent';
import getPokemonProcess from '../thunks/getPokemonProcess';

function mapStateToProps(state, ownProps) {
  return {
    //pokemonObj: state.pokemonObj
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    //fetch_pokemon_webApi: () => dispatch(getPokemonProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//you only user dismount when you want an api continous to send data
const onDidMount = lifecycle({
  componentDidMount() {
    //this.props.fetch_pokemon_webApi();
  }
});

export default compose(connectToStore, onDidMount)(CreateBattlePageComponent);
