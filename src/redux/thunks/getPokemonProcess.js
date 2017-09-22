import getPokemon from '../../api/getPokemon';

export default function getPokemonProcess(deckData) {
  // let data = deckData.fields.cards.split(',');
  //
  // return (dispatch, getState, env) => {
  //   let pokemonObj = data.map(id => {
  //     return getPokemon(id);
  //   });
  //
  //   Promise.all(pokemonObj).then(value => {
  //     console.log('this vaule', value);
  //     let getPokemonObj = value.map(obj => {
  //       let tempObj = {
  //         name: obj.name,
  //         image: obj.sprites.front_default,
  //         moves1: obj.moves[0].move.name,
  //         moves2: obj.moves[1].move.name,
  //         stats: obj.stats
  //       };
  //       return tempObj;
  //     });
  //
  //     dispatch({
  //       type: 'GET_POKEMON',
  //       getPokemonObj: getPokemonObj
  //     });
  //   });
  // };
}
