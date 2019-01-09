import React from 'react';

const HistoryRow = ({h})=>{
  return (
    <tr>
      <th scope="row">{h.letter}</th>
      {
        h.fields.map(f=>(
          <td key={"h"+f.category.id}>
            {f.value}
            <span className={"float-right badge badge-"+(f.points?'success':'danger')}>{f.points}</span>
          </td>
        ))
      }
      <td><span className="font-size-2 badge badge-primary">{h.points}</span></td>
      <td>
        <span>[{h.time.text}]</span>
      </td>
    </tr>
  );
}

export default HistoryRow;
