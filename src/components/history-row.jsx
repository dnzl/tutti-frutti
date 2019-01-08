import React from 'react';

const HistoryRow = ({h})=>{
  return (
    <div className="row">
      <div className="col-1">{h.letter}</div>
      {
        h.fields.map(field=>(
          <div key={"h"+field.category.id} className="col-sm">
            {field.value}
          </div>
        ))
      }
      <div className="col-sm">[{h.time.text}]</div>
    </div>
  );
}

export default HistoryRow;
