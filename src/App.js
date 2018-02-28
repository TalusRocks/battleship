import React, { Component } from 'react';
import './index.css';

class App extends Component {

  state = {
    ships: {
      shipOne: [[1, 'A'], [1, 'B'], [1, 'C']],
      shipTwo: [[6, 'B'], [7, 'B'], [8, 'B']]
    }
  }


  guess = (e) => {
    const column = parseInt(e.target.id[0], 10)
    const row = e.target.id[1]

    const ships = this.state.ships
    let hit = false
    for(var i in ships){

      for(let k = 0; k < ships[i].length; k++){
        if(ships[i][k][0] === column && ships[i][k][1] === row){
          console.log("HIT!!!");
          hit = true
        }
      }
    }

    if (hit){
      e.target.classList.add('hitShip')
      e.target.classList.remove('target')
    } else {
      e.target.classList.add('missShip')
      e.target.classList.remove('target')
    }

  }


  render() {
    return (
      <div className="App">

        <h1>Battleship</h1>

        <div className="grid-wrapper">

          <div className="square-wrapper">
            <div className="square letter"></div>
            <div className="square">1</div>
            <div className="square">2</div>
            <div className="square">3</div>
            <div className="square">4</div>
            <div className="square">5</div>
            <div className="square">6</div>
            <div className="square">7</div>
            <div className="square">8</div>
            <div className="square">9</div>
            <div className="square">10</div>
          </div>
          <div className="square-wrapper">
            <div className="square letter">A</div>
            <div onClick={ this.guess } className="square target" id="1A"></div>
            <div onClick={ this.guess } className="square target" id="2A"></div>
            <div onClick={ this.guess } className="square target" id="3A"></div>
            <div onClick={ this.guess } className="square target" id="4A"></div>
            <div onClick={ this.guess } className="square target" id="5A"></div>
            <div onClick={ this.guess } className="square target" id="6A"></div>
            <div onClick={ this.guess } className="square target" id="7A"></div>
            <div onClick={ this.guess } className="square target" id="8A"></div>
            <div onClick={ this.guess } className="square target" id="9A"></div>
            <div onClick={ this.guess } className="square target" id="10A"></div>
          </div>
          <div className="square-wrapper">
            <div className="square letter">B</div>
            <div onClick={ this.guess } className="square target" id="1B"></div>
            <div onClick={ this.guess } className="square target" id="2B"></div>
            <div onClick={ this.guess } className="square target" id="3B"></div>
            <div onClick={ this.guess } className="square target" id="4B"></div>
            <div onClick={ this.guess } className="square target" id="5B"></div>
            <div onClick={ this.guess } className="square target" id="6B"></div>
            <div onClick={ this.guess } className="square target" id="7B"></div>
            <div onClick={ this.guess } className="square target" id="8B"></div>
            <div onClick={ this.guess } className="square target" id="9B"></div>
            <div onClick={ this.guess } className="square target" id="10B"></div>
          </div>
          <div className="square-wrapper">
            <div className="square letter">C</div>
            <div onClick={ this.guess } className="square target" id="1C"></div>
            <div onClick={ this.guess } className="square target" id="2C"></div>
            <div onClick={ this.guess } className="square target" id="3C"></div>
            <div onClick={ this.guess } className="square target" id="4C"></div>
            <div onClick={ this.guess } className="square target" id="5C"></div>
            <div onClick={ this.guess } className="square target" id="6C"></div>
            <div onClick={ this.guess } className="square target" id="7C"></div>
            <div onClick={ this.guess } className="square target" id="8C"></div>
            <div onClick={ this.guess } className="square target" id="9C"></div>
            <div onClick={ this.guess } className="square target" id="10C"></div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
