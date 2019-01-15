import React from 'react';
import HistoryRow from './history-row';

const ScoreComparison = ({playersScores})=>{
console.log(playersScores);
  return (
    <React.Fragment>
      {
        playersScores.map(p=>{
          const h=p.history[p.history.length-1];
          return (
            <React.Fragment key={"psc-"+p.player.id}>
              <tr>
                <th>Player</th>
                <th>{p.player.name}</th>
              </tr>
console.log(h);
              <HistoryRow key={'spc'+h.letter} h={h} />
            </React.Fragment>
          )
        })
      }
    </React.Fragment>
  );
}

export default ScoreComparison;
