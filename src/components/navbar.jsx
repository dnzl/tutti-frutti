import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({selectedLetter,startGame}) =>{
  return (
    <nav className="navbar navbar-light bg-light">
      <h1 className="navbar-brand"><Link to="/">Tutti Frutti</Link></h1>
      {
        (selectedLetter===false)?(
          <button onClick={startGame} className="btn btn-success">Start</button>
        ):(
          <h3><small>Selected letter:</small> {selectedLetter}</h3>
        )
      }
      <div></div>
    </nav>
  );
}

export default NavBar;
