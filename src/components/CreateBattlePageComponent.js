import React, { Component } from 'react';

export default class CreateBattlePageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonStatus: [],
      link: ''
    };
  }

  _getPokemonStatus = (event, props) => {
    event.preventDefault();
    console.log('this.props: ', this.props);
    console.log('this.props.userDecks: ', this.props.userDecks);

    let image = this.props.userDecks.map(result => {
      console.log('result', result);
      return result.fields.cards[0].sprites.front_default;
    });
    this.setState({ link: image });
  };

  render() {
    return (
      <div className="row">
        <div className="col s6 m3">
          <div className="card">
            <div className="card-image">
              {/* {console.log('test-------', this.state.link)} */}
              {/* <img alt="pokemonx" src={this.state.link} /> */}
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <img src={this.state.link} alt={1} />

              <td>HP</td>
              <td>10</td>
              <td>MP</td>
              <td>20</td>
            </div>
            <div className="card-action">
              <button
                onClick={this._getPokemonStatus}
                className="waves-effect waves-light btn">
                ATTACK
              </button>
            </div>
          </div>
        </div>

        <div className="col s6 m3">
          <div className="card">
            <div className="card-image">
              {/* {console.log('test-------', this.state.link)} */}
              {/* <img alt="pokemonx" src={this.state.link} /> */}
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <td>HP</td>
              <td>10</td>
              <td>MP</td>
              <td>20</td>
            </div>
            <div className="card-action">
              <button
                onClick={this._getPokemon}
                className="waves-effect waves-light btn">
                ATTACK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
