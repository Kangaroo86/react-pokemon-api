import React, { Component } from 'react';
import pic01 from '../../src/pic01.jpg';
import pic02 from '../../src/pic02.jpg';
import samplepict from '../../src/samplepict.jpg';
//import deck_image from '../deck_image.png';
//import deck_image from '../samplepict.jpg';

export default class CreateBattlePageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonStatus: [],
      link: ''
    };
  }

  _getPokemon = (event, props) => {
    event.preventDefault();
    //console.log('battlePage props---', this.props);
    //console.log('imag result', this.props.pokemonObj.sprites.front_default);
    //this.props.getPokemon();
    //this.setState({ link: this.props.pokemonObj.sprites.front_default });
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
