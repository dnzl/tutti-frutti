import React from 'react';
import Board from './board';

const MultiGame=({selectedLetter,categories,history,saveRow,players})=>{
  return(
    <div className="row">
      <main className="main col-md-10">
        <Board
          selectedLetter={selectedLetter}
          categories={categories}
          history={history}
          saveRow={saveRow}
          />
      </main>
      <section className="col-md-2 col-players">
        <ul>
        {
          players.map(p=>(
            <li key={"col-player-"+p.id}>{p.username}</li>
          ))
        }

        </ul>
      </section>
    </div>
  );
}

export default MultiGame;
