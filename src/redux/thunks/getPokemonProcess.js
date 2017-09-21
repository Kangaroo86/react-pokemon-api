import getPokemon from '../../api/getPokemon';

export default function getPokemonProcess(deckData) {
  console.log('deckData', deckData);

  console.log(deckData.length);
  // let deckDataApi = deckData.forEach(obj => {
  //   let deckObj = {
  //     pokemonId: obj.cards,
  //     deckId: obj.id,
  //     lossess: obj.lossess,
  //     wins: obj.wins,
  //     deckName: obj.name
  //   };
  //   return deckObj;
  // });

  let data = deckData.fields.cards.split(',');

  return (dispatch, getState, env) => {
    let pokemonObj = data.map(id => {
      return getPokemon(id);
    });

    Promise.all(pokemonObj).then(value => {
      console.log('this vaule', value);
      let getPokemonObj = value.map(obj => {
        let tempObj = {
          name: obj.name,
          image: obj.sprites.front_default,
          moves1: obj.moves[0].move.name,
          moves2: obj.moves[1].move.name,
          stats: obj.stats
        };
        //tempObj.deckInfo = deckData;
        return tempObj;
      });

      // let getDeckInfo = {
      //   deckInfo: deckData,
      //   pokemonInfo: getPokemonObj
      // };

      //console.log('result', getDeckInfo);
      //console.log('getPokemonProcess thunk:', getPokemonObj);
      dispatch({
        type: 'GET_POKEMON',
        getPokemonObj: getPokemonObj
      });
    });
  };
}
