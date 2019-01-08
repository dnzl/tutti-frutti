import React, { Component } from 'react';
import NavBar from './navbar';
import Board from './board';

class Game extends Component {
  state={
    letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    categories:[
      {id:1,name:'Nombres'},
      {id:2,name:'Lugares'},
      {id:3,name:'Verbos'},
    ],
    history:[
      /*
      {
        id:1,
        letter:'B',
        time:{seconds:20,text:'00:00'},
        points:15,
        fields:[
          {category:{id:1,name:'Nombres'},value:'Aasdasd',points:10},
          {category:{id:3,name:'ver'},value:'',points:0},
          {category:{id:2,name:'luga'},value:'repeated',points:5}
        ]
      }*/
    ],
    selectedLetter:false
  };

  isLetterRepeated=(letter)=>{
console.log(letter,this.state.history,this.state.history.find(x=>x.letter===letter));
    if(!this.state.history.length){ return false;}
    return this.state.history.find(x=>x.letter===letter)!==undefined;
  };

  getRandomLetter=()=>{
    return this.state.letters[Math.floor(Math.random()*this.state.letters.length)];
  };

  getNextLetter=()=>{
    let index=this.state.letters.findIndex(x=>x===this.state.selectedLetter);
    if(index>=this.state.letters.length-1){return false;}
    return this.state.letters[index+1];
  };

  addLetterToHistory=(letter,values,time)=>{
console.log('add to history');
    const history=[...this.state.history];
    history[history.length]={letter:letter,fields:values,time:time};
console.log('setState:',history);
    this.setState({history});
  };

  saveRow=(letter,values,time)=>{
    this.addLetterToHistory(letter,values,time);
console.log('save',this.state.history);
    if(this.props.selectedMode.includes('nonstop')){
      this.setNewLetter();
    }else{
      this.stopGame();
    }
  };

  setNewLetter=()=>{
    let letter=false;
    if(this.props.selectedMode.includes('random')){
      letter=this.getRandomLetter();
      while(this.isLetterRepeated(letter)){letter=this.getRandomLetter()}
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

  componentDidMount(){
    this.startGame();
  }

  render() {
    return (
      <div className="Game">
        <NavBar selectedLetter={this.state.selectedLetter}
                startGame={this.startGame} />
          <main className="main">
            <Board
              selectedLetter={this.state.selectedLetter}
              categories={this.state.categories}
              history={this.state.history}
              saveRow={this.saveRow} />
          </main>
      </div>
    );
  }
}

export default Game;
