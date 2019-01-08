import React, { Component } from 'react';
import NavBar from './components/navbar';
import Game from './components/game';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

class App extends Component {
  state={
    letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    categories:[
      {id:1,name:'Nombres'},
      {id:2,name:'Lugares'},
      {id:3,name:'Verbos'},
    ],
    history:[
      {id:1,letter:'B',time:{seconds:20,text:'00:00'},fields:[{category:{id:1,name:'Nombres'},value:'Aasdasd'}]}
    ],
    selectedLetter:'A',
  };

  isLetterRepeated=(letter)=>{
    if(!this.state.history.length) return false;
    return this.state.history.find(x=>x.letter===letter)!==undefined;
  };

  getRandomLetter=()=>{
    return this.state.letters[Math.floor(Math.random()*this.state.letters.length)];
  };

  addLetterToHistory=(letter,values,time)=>{
    const history=[...this.state.history];
    history[history.length]={letter:letter,fields:values,time:time};
    this.setState({history});
  };

  endRow=(letter,values,time)=>{
    this.addLetterToHistory(letter,values,time);
    this.setNewLetter();
  };

  setNewLetter=()=>{
    let letter=this.getRandomLetter();
    if(this.state.history.length && this.state.history.length===this.state.letters.length){
console.log('ya se usaron todas las letras');
      return false;
    }
    while(this.isLetterRepeated(letter)){letter=this.getRandomLetter()}

    this.setLetter(letter);
  };

  setLetter=(letter)=>{
    this.setState({selectedLetter:letter});
  };

  startGame=()=>{
    this.setNewLetter();

console.log('start game!');
  };


  render() {
    return (
      <div className="App">
        <NavBar selectedLetter={this.state.selectedLetter}
                startGame={this.startGame} />
          <main className="main">
            <Game
              selectedLetter={this.state.selectedLetter}
              categories={this.state.categories}
              history={this.state.history}
              saveRow={this.endRow} />
          </main>
      </div>
    );
  }
}

export default App;
