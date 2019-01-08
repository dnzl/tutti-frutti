import React, { Component } from 'react';
import Row from './row';
import HistoryRow from './history-row';

class Board extends Component {

  render() {
    const {selectedLetter,categories,saveRow} = this.props;
    const history=[...this.props.history];
    return (
      <div className="board">
        <div className="container">

          <table className="table text-left">
            <thead>
              <tr>
                <th scope="col">Letter</th>
                {
                  categories.map(category=>(
                    <th scope="col" key={"title"+category.id}>
                      {category.name}
                    </th>
                  ))
                }
                <th scope="col">Points</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              <Row categories={categories} selectedLetter={selectedLetter} saveRow={saveRow} />

              {history.reverse().map(h=>(<HistoryRow key={'h'+h.letter} h={h} />))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Board;
