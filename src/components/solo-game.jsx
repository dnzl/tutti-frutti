import React from 'react';
import Board from './board';

const SoloGame=({selectedLetter,categories,history,saveRow})=>{
  return(
    <Board
      selectedLetter={selectedLetter}
      categories={categories}
      history={history}
      saveRow={saveRow} />
  );
}

export default SoloGame;
