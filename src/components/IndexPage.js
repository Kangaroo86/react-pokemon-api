import React from 'react';
import { Link } from 'react-router-dom';
import RenderUserDeckComponent from './RenderUserDeckComponent';

export default function IndexPage(props) {
  return (
    <div>
      <h1>Pokeman Battles</h1>
      <h3>Select a Deck...</h3>
      {props.userDecks.map(deck =>
        <RenderUserDeckComponent onDelete={props.onDelete} userDeck={deck} />
      )}
      <h1>
        <Link to="/decks/new">
          <button>CONSTRUCT NEW DECK</button>
        </Link>
      </h1>
    </div>
  );
}
