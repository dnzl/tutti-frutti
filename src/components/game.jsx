import React, { Component } from 'react';
import Row from './row';
import HistoryRow from './history-row';

class Game extends Component {

  render() {
    const {selectedLetter,categories,saveRow} = this.props;
    const history=[...this.props.history];
    return (
      <div className="game">
        <div className="container">
{/* titulos */}
          <div className="row">
            <div className="col-1">Letter</div>
            {
              categories.map(category=>(
                <div key={"title"+category.id} className="col-sm">
                  {category.name}
                </div>
              ))
            }
            <div className="col-sm">Time</div>
          </div>
{/* fields */}
          <div className="row">
            <Row categories={categories} selectedLetter={selectedLetter} saveRow={saveRow} />
          </div>
{/* history */}
          {history.reverse().map(h=>(
            <HistoryRow key={'h'+h.letter} h={h} />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
