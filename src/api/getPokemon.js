export default function getPokemon(pokemonId) {
  return fetch(`http://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then(response => {
      //console.log('getPokemonImage response: ', response);
      return response.json();
    })
    .then(data => {
      //console.log('this is rel data', data.sprites.front_default);
      return data;
    });
}
