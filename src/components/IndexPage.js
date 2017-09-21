import React from 'react';
import { Link } from 'react-router-dom';
// import pic01 from '../../src/pic01.jpg';
// import pic02 from '../../src/pic02.jpg';

function renderUserDeck(userDeck) {
  return (
    <div className="card" key={userDeck.id}>
      <div className="card-image waves-effect waves-block waves-light" />
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {userDeck.fields.name}{' '}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          Wins: {userDeck.fields.wins}
        </p>
        <p>
          Losses: {userDeck.fields.losses}
        </p>
        <p>
          {userDeck.fields.cards.map((card, i) =>
            <img key={i} src={card.sprites.front_default} alt={card.name} />
          )}
        </p>
        <p>
          <Link to="/decks/battle">
            <button className="waves-effect waves-light btn">BATTLE</button>
          </Link>
          <button className="waves-effect waves-light btn">DELETE</button>
        </p>
      </div>
    </div>
  );
}

export default function IndexPage(props) {
  // const pokemonObj = props.getPokemonObj;

  //console.log('pokemonObj----', pokemonObj);
  console.log('props---', props);

  const userDecksRendered = props.userDecks.map(userDeck =>
    renderUserDeck(userDeck)
  );

  return (
    <div>
      <h1>Pokeman Battles</h1>
      <h3>Select a Deck...</h3>
      {userDecksRendered}
      <h1>
        <Link to="/decks/new">
          <button>CONSTRUCT NEW DECK</button>
        </Link>
      </h1>
    </div>
  );
}

// const mapStateToProps = state => {
//   //console.log(state, 'this sate');
//   return {
//     userDecks: state.userDecks, //A thunk: getUserDecksProcess(). Get decks API from airtable
//     pokemonObj: state.pokemonObj ////A thunk: getPokemonProcess(). Get decks API from https://pokeapi.co/
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetch_user_decks: () => dispatch(getUserDecksProcess()), //getUserDecksProcess is a thunks
//     fetch_pokemon_webApi: () => dispatch(getPokemonProcess()) //getPokemonProcess is a thunks
//   };
// };

// we've two props: mapStateToProps & mapDispatchToProps.
// mapDispatchToProps is involking the thunk, getUserDecksProcess, and we have the function fetch_user_decks.
// so connection is throwing mapStateToProps & mapDispatchToProps into the IndexPage.
// this is why the IndexPage could use the fetch_user_decks function
// export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
