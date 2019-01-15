import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({selectedLetter,startGame,points}) =>{
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="btn btn-sm" to="/">&laquo; back</Link>
      <h1 className="navbar-brand">Tutti-Frutti</h1>
      <div>
        <span className="mr-2">Total Points: <strong>{points}</strong></span>
        {
          (selectedLetter===false)?(
            <button autoFocus={true} onClick={startGame} className="btn btn-success">Start</button>
          ):(
            <span>Letter: <strong>{selectedLetter}</strong></span>
          )
        }
      </div>
    </nav>
  );
}

export default NavBar;
