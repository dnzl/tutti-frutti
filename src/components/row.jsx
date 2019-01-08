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
        <React.Fragment>
          <div className="col-1">{selectedLetter}</div>
          {
            categories.map((category,index)=>(
              <div key={"input"+category.id} className="form-group col-sm">
                <input className={"form-control mr-sm-2 "+this.state.fields[index].clsNme} type="text" placeholder=""
                      value={this.state.fields[index].value}
                      onChange={(e)=>{this.handleOnChange(index,e.target.value)}}
                      ref={this.state.fields[index].ref}
                 />
              </div>
            ))
          }
          <div className="col-sm">
            <Timer time={this.state.time} onUpdateTime={this.handleUpdateTime}  />
            <button onClick={()=>{
              saveRow(selectedLetter,this.state.fields,this.state.time);
              this.rowFinished();
            }} className="btn btn-danger btn-sm">Stop!</button>
          </div>
        </React.Fragment>
    );
  }
}

export default Row;
