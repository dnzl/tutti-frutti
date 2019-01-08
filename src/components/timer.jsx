import React,{Component} from 'react';

let int;

export default class Timer extends Component{
  //from https://github.com/StevenIseki/react-timer/blob/master/src/SecondsTohhmmss.js
  formatTime =(totalSeconds)=>{
    let hours   = Math.floor(totalSeconds/3600);
    let minutes = Math.floor((totalSeconds-(hours*3600))/60);
    let seconds = Math.round((totalSeconds-(hours*3600)-(minutes*60))*100)/100;

    let result  = hours>0?((hours<10?"0"+hours:hours)+":"):"";
        result += ((minutes<10?"0":"")+minutes);
        result += ":"+(seconds<10?"0":"")+seconds;
    return result;
  }

  update=()=>{
    const seconds=this.props.time.seconds+1;
    const time={
      seconds:seconds,
      text:this.formatTime(seconds)
    };
    this.props.onUpdateTime(time);
  };

  start=()=>{
    if(!int){
      int=setInterval(this.update,1000);
    }
  };

  stop=()=>{
    if(int){
      clearInterval(int);
      int=null;
    }
  };

  componentDidMount=()=>{
    this.start();
  };
  componentDidUpdate=()=>{
    if(this.props.disabled===true){
      this.stop();
    }else{
      this.start();
    }
  };

  componentWillUnmount=()=>{
    this.stop();
  };

  render(){
    return (
      <span>
        [{this.props.time.text}]
      </span>
    );
  }
}
