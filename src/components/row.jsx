import React, { Component } from 'react';
import Timer from './timer';

class Row extends Component{
  state={
    fields:[],
    time:{
      seconds:0,
      text:"00:00"
    },
  }

  constructor(props){
    super(props);
    this.state.fields=this.getEmptyFields();
  };

  getEmptyFields=()=>{
    return this.props.categories.map(cat=>{return{
      category:cat,
      value:'',
      ref:React.createRef(),
      clsNme:'',
    }});
  };

  rowFinished=()=>{
    this.setState({fields:this.getEmptyFields(),time:{seconds:0,text:'00:00'}});
    this.focus();
  };

  handleUpdateTime=(time)=>{
    this.setState({time});
  };

  handleOnChange=(index,value)=>{
    const fields=[...this.state.fields];
    fields[index].value=value;
    fields[index].clsNme=(value.length && value[0].toLowerCase()!==this.props.selectedLetter.toLowerCase())?'is-invalid':'';
    this.setState({fields});
  };

  componentDidMount=()=>{
    this.focus();
  }

  focus(){
    this.state.fields[0].ref.current.focus();
  }

  render() {
    const {categories,selectedLetter,saveRow} = this.props;

    return (
        <tr className={"form-group"+(selectedLetter===false?' d-none':'')}>
          <th scope="row">{selectedLetter}</th>
          {
            categories.map((category,index)=>(
              <td key={"input"+category.id}>
                <div className="form-group">
                  <input className={"form-control mr-sm-2 "+this.state.fields[index].clsNme}
                        type="text"
                        value={this.state.fields[index].value}
                        onChange={(e)=>{this.handleOnChange(index,e.target.value)}}
                        ref={this.state.fields[index].ref}
                   />
                 </div>
              </td>
            ))
          }
          <td>
            <button onClick={()=>{
              saveRow(selectedLetter,this.state.fields,this.state.time);
              this.rowFinished();
            }} className={"btn btn-danger btn-sm"+(selectedLetter===false?' d-none':'')}>Stop!</button>
          </td>
          <td>
            <Timer time={this.state.time} onUpdateTime={this.handleUpdateTime} disabled={selectedLetter===false}  />
          </td>
        </tr>
    );
  }
}

export default Row;
