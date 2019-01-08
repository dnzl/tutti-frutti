import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './components/index';
import Game from './components/game';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

class App extends Component {
  state={
    modes:[
      {id:1,name:'Solo Normal',url:'solo-normal'},
      {id:2,name:'Solo Nonstop ABC',url:'solo-nonstop-abc'},
      {id:3,name:'Solo Nonstop Random',url:'solo-nonstop-random'},
      {id:4,name:'Multiplayer Normal',url:'multi-normal'},
      {id:5,name:'Multiplayer Nonstop ABC',url:'multi-nonstop-abc'},
      {id:6,name:'Multiplayer Nonstop Random',url:'multi-nonstop-random'},
    ],
    selectedMode:{id:1,name:'Solo Normal',url:'solo-normal'}
  };

  onSelectMode=mode=>{
    this.setState({selectedMode:mode});
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={()=>(
            <Index selectedMode={this.state.selectedMode} gameModes={this.state.modes} onSelectMode={this.onSelectMode} />
          )} />
          <Route path="/game/:mode" render={({match})=>(
            <Game selectedMode={match.params.mode} />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
