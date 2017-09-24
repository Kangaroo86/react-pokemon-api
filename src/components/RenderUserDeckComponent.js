import React from 'react';
import { Link } from 'react-router-dom';

export default function RenderUserDeck({ userDeck, onDelete, onUpdate }) {
  function handle_onDelete() {
    onDelete(userDeck.id);
  }

  function handle_onUpdate() {
    //console.log('pokemon id', userDeck.fields.cards[0].id);
    onUpdate(userDeck.fields.id, userDeck.fields.name, userDeck.fields.cards);
  }

  return (
    <div className="card" key={userDeck.id}>
      <div className="card-image waves-effect waves-block waves-light" />
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {userDeck.fields.name}
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
          <Link to="/decks/new">
            <button
              onClick={handle_onUpdate}
              className="waves-effect waves-light btn">
              EDIT
            </button>
          </Link>
          <button
            onClick={handle_onDelete}
            className="waves-effect waves-light btn">
            DELETE
          </button>
        </p>
      </div>
    </div>
  );
}
