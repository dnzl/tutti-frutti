import React from 'react';
import { Link } from "react-router-dom";

const Start=({
  gameModes,
  onSelectMode,
  selectedMode,
  username,
  onChangeName,
  startUrl,
  players,
  removePlayer
})=>{
  const inviteUrl=window.location.protocol+'//'+window.location.host+startUrl;
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

            {
              (selectedMode.url.includes('multi')?(
                <div>
                  <hr/>

                  <form>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Your Name:</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" value={username} onChange={onChangeName} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Invite Friends:</label>
                      <div className="col-sm-10">
                        <input type="text" readOnly className="form-control" value={inviteUrl} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Players:</label>
                      <div className="col-sm-10">
                        {
                          players.map((player)=>(
                            <span key={"player-"+player.id} className="badge badge-pill badge-secondary mr-5">
                              {player.username}
                              <span className="ml-2"
                                    style={{cursor:"pointer"}}
                                    onClick={()=>{removePlayer(player.id);}}>
                                    &times;
                              </span>
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </form>
                </div>
              ):"")
            }

            <hr/>
            <Link className="btn btn-success btn-lg btn-block" to={startUrl}>Play</Link>
            <hr/>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Start;
