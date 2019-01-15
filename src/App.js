import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Start from './components/start';
import Game from './components/game';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


let getRandomString=(length)=>{
  return Math.random().toString(36).slice(2).substr(0,length);
};

const gameModes=[
  {id:1,name:'Solo Normal',url:'solo-normal'},
  {id:2,name:'Solo Nonstop ABC',url:'solo-nonstop-abc'},
  {id:3,name:'Solo Nonstop Random',url:'solo-nonstop-random'},
  {id:4,name:'Multiplayer Normal',url:'multi-normal'},
  {id:5,name:'Multiplayer Nonstop ABC',url:'multi-nonstop-abc'},
  {id:6,name:'Multiplayer Nonstop Random',url:'multi-nonstop-random'},
];

class App extends Component{
  state={
    idGame:false,
    modes:gameModes,
    username:'Guest',
    selectedMode:gameModes[4],
    startUrl:'/game/'+gameModes[0].url,
    players:[
      {id:1,username:'Guest1'},
      {id:2,username:'Guest2'},
      {id:3,username:'Guest3'},
    ]
  };

  constructor(){
    super();
    this.state.username='Guest-'+getRandomString(5);
    this.state.idGame=getRandomString(10);
  }

  removePlayer=idPlayer=>{
    let players=[...this.state.players];
    const index=players.findIndex(x=>x.id===idPlayer);
    if(index===-1){return false;}
    players.splice(index,1);
    this.setState({players});
  };

  onSelectMode=mode=>{
    this.setState({
      selectedMode:mode,
      startUrl:'/game/'+(mode.url.includes('multi')?this.state.idGame:mode.url),
    });
  };

  handleChangeName=e=>{
    this.setState({username:e.target.value});
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={()=>(
            <Start selectedMode={this.state.selectedMode}
                    gameModes={this.state.modes}
                    onSelectMode={this.onSelectMode}
                    username={this.state.username}
                    onChangeName={this.handleChangeName}
                    startUrl={this.state.startUrl}
                    players={this.state.players}
                    removePlayer={this.removePlayer}
            />
          )} />
          <Route path="/game/:idGame" render={({match})=>(
            <Game idGame={match.params.idGame}
                  selectedMode={this.state.selectedMode}
                  username={this.state.username}
                  players={this.state.players}
             />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
