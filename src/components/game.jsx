import React, { Component } from 'react';
import NavBar from './navbar';
import SoloGame from './solo-game';
import MultiGame from './multi-game';

class Game extends Component {
  state={
    letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    categories:[
      {id:1,name:'Names'},
      {id:2,name:'Places'},
      {id:3,name:'Verbs'},
      {id:4,name:'Celebrities'},
    ],
    history:[],
    selectedLetter:false,
    totalPoints:0,
    playersScores:[
      {
        player:{id:1,username:'dnzl'},
        history:[
          {letter:'A',}
        ],
      }
    ]
  };

  isLetterRepeated=(letter)=>{
    if(!this.state.history.length){ return false;}
    return this.state.history.find(x=>x.letter===letter)!==undefined;
  };

  getRandomLetter=()=>{
    return this.state.letters[Math.floor(Math.random()*this.state.letters.length)];
  };

  getNextLetter=()=>{
    let index=this.state.history.length;
    if(index>=this.state.letters.length){return false;}
    return this.state.letters[index];
  };

  addLetterToHistory=(data)=>{
    return new Promise(resolve=>{
      const history=[...this.state.history];
      history[history.length]=data;
      this.setState({history,totalPoints:this.state.totalPoints+data.points},()=>{resolve(true);});
    });
  };


  saveRow=(letter,fields,time)=>{
    let rowPoints=0;
    const isMultiplayer=this.props.selectedMode.url.includes('multi');

    fields.map(f=>{
      let points=0;
      if(f.value!=="" && !f.error){points+=10;}
      if(isMultiplayer){
        //if someone has same word: -5
        //if someone has no word: +10
        //if no one has word: +10
      }

      f.points=points;
      rowPoints+=points;
    });

    this.addLetterToHistory({
      letter:letter,
      fields:fields,
      time:time,
      points:rowPoints,
    }).then(()=>{
      if(this.props.selectedMode.url.includes('nonstop')){
        this.setNewLetter();
      }else{
        this.stopGame();
      }
    });
  };

  setNewLetter=()=>{
    let letter=false;
    if(this.props.selectedMode.url.includes('random')){
      letter=this.getRandomLetter();
      let f=0;
      while(this.isLetterRepeated(letter)){
        letter=this.getRandomLetter();
        if(++f>=this.state.letters.length){letter=false; break;}
      }
    }else{
      letter=this.getNextLetter();
    }
    this.setLetter(letter);
  };

  setLetter=(letter)=>{
    this.setState({selectedLetter:letter});
  };

  startGame=()=>{
    this.setNewLetter();
  };

  stopGame=()=>{
    this.setState({selectedLetter:false});
  };

  render() {
    return (
      <div className="Game">
        <NavBar selectedLetter={this.state.selectedLetter}
                startGame={this.startGame}
                points={this.state.totalPoints} />
          <div className="container">
            {this.props.selectedMode.url.includes('multi')?(
              <MultiGame
                selectedLetter={this.state.selectedLetter}
                categories={this.state.categories}
                history={this.state.history}
                saveRow={this.saveRow}
                players={this.props.players}
                playersScores={this.state.playersScores}
              />
            ):(
              <SoloGame
                selectedLetter={this.state.selectedLetter}
                categories={this.state.categories}
                history={this.state.history}
                saveRow={this.saveRow}
              />
            )}
          </div>
      </div>
    );
  }
}

export default Game;
