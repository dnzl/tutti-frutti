import React from 'react';

const NavBar = ({selectedLetter,startGame}) =>{
  return (
    <nav className="navbar navbar-light bg-light">
      <h1 className="navbar-brand">Tutti Frutti</h1>
      <h3><small>Selected letter:</small> {selectedLetter}</h3>
      <button onClick={startGame} className="btn btn-success">Start!</button>
    </nav>
  );
}

export default NavBar;
