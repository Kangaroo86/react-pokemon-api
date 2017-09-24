import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Input } from 'react-materialize';

const pokemon = [
  {
    id: 1,
    name: 'Bulbasaur'
  },
  {
    id: 4,
    name: 'Charmander'
  },
  {
    id: 7,
    name: 'Squirtle'
  },
  {
    id: 150,
    name: 'Mewtwo'
  },
  {
    id: 151,
    name: 'Mew'
  },
  {
    id: 25,
    name: 'Pikachu'
  },
  {
    id: 38,
    name: 'Ninetails'
  },
  {
    id: 144,
    name: 'Articuno'
  },
  {
    id: 145,
    name: 'Zapdo'
  },
  {
    id: 146,
    name: 'Moltres'
  },
  {
    id: 243,
    name: 'Raikou'
  },
  {
    id: 244,
    name: '	Entei'
  },
  {
    id: 245,
    name: 'Suicune'
  }
];

export default class CreateUserDeckComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPokemon: [],
      deckName: '',
      value: '',
      redirect: false
    };
  }

  _addToList = event => {
    event.preventDefault();
    const pokemonDropDown = this.refs.pokemonDropDown; //refs will return the DOM elements
    const character = pokemon.find(
      character => character.id === parseInt(pokemonDropDown.state.value)
    );
    this.setState(currentState => {
      return {
        selectedPokemon: [
          ...currentState.selectedPokemon,
          this.state.selectedPokemon.id !== character.id ? character : false
        ]
      };
    });
  };

  _submitDeckName = event => {
    this.setState({ deckName: event.target.value });
  };

  _handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  _handleSubmit = (event, props) => {
    event.preventDefault();
    const deckName = this.state.deckName.trim();
    const selectedPokemon = this.state.selectedPokemon;
    this.props.createDeck(
      deckName,
      selectedPokemon.map(character => character.id)
    );
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="row">
        <form className="col s12" onSubmit={this._handleSubmit}>
          <div className="input-field inline">
            <h5>Name your deck</h5>
            <input
              value={this.state.deckName}
              onChange={this._submitDeckName}
              id="deckName"
              name="deckNameInput"
              type="text"
              className="validate"
              placeholder="INPUT DECK NAME"
            />
            <label data-error="wrong" data-success="right" />
          </div>

          <h5>Select your Pokemon</h5>
          <Row>
            <Input
              onChange={this._handleChange}
              s={12}
              type="select"
              ref="pokemonDropDown"
              value={this.state.value}>
              {pokemon.map(character =>
                <option key={character.id} value={character.id}>
                  {character.name}
                </option>
              )}
            </Input>
          </Row>
          <button type="submit" onClick={this._addToList}>
            ADD TO DECK
          </button>
        </form>

        <div>
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>
                {this.state.deckName}
              </h4>
            </li>
            {this.state.selectedPokemon.length === 0
              ? <p>EMPTY LIST</p>
              : this.state.selectedPokemon.map(character =>
                  <li
                    className="collection-item"
                    key={character.id}
                    value={character.id}
                    name="pokemonIdInput">
                    {character.name}
                  </li>
                )}
          </ul>
          <button onClick={this._handleSubmit}>CREATE DECK</button>
        </div>
      </div>
    );
  }
}
