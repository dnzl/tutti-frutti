import React from 'react';
import { Link } from "react-router-dom";

const Index=({gameModes,onSelectMode,selectedMode})=>{
  return (
    <header className="App-header">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1>Tutti-Frutti</h1>
          <p>Select game mode: <strong>{selectedMode.name}</strong></p>
          <div className="container">
            <div className="row">
            {
              gameModes.map((g,i)=>(
                <div key={"gmodes"+g.id} className="btn-game-mode col-4">
                  <button onClick={()=>{onSelectMode(g)}}
                        className={"btn-block btn js-scroll-trigger btn-primary "+(selectedMode.id===g.id?'active':'')}>
                    {g.name}
                  </button>
                </div>
              ))
            }
            </div>

            <hr/>
            <Link className="btn btn-success btn-lg btn-block" to={"game/"+selectedMode.url}>Start!</Link>
            <hr/>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Index;
