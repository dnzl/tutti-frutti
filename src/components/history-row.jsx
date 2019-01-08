import React from 'react';

const HistoryRow = ({h})=>{
  return (
    <tr>
      <th scope="row">{h.letter}</th>
      {
        h.fields.map(field=>(
          <td key={"h"+field.category.id}>
            {field.value} <span className="badge badge-success">{field.points}</span>
          </td>
        ))
      }
      <td><span>{h.points}</span></td>
      <td>
        <span>[{h.time.text}]</span>
      </td>
    </tr>
  );
}

export default HistoryRow;
