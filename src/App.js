import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drag from './Drag'
import moment from 'moment'
class App extends Component {
constructor(props){
super(props)

this.state={
historyData:[],
day:8,
width:420,
height:300,
x: 0,
y: 0

}

}


componentDidMount(){

 for (let index = 7; index > 0; index--) {
  let  date = moment().subtract(index,'d').format('YYYY-MM-DD')
    fetch(`http://data.fixer.io/api/${date}?access_key=3f8554c44c10d10acb470fce230a18ca&symbols=USD,AUD,CAD&format=1`)
    .then((data)=>data.json())
    .then((data)=>{
      const historyData= this.state.historyData
      const date=data.date
     const {AUD,CAD,USD}=data.rates
     const dataObj=  {date,AUD,CAD,USD}
     historyData.push(dataObj)
   this.setState({historyData,day:index})


    })


   
 }



}



  render() {

    const {day,historyData,height,width}=this.state
    return (
      <div className="App">

      { day!==1? <div>2</div>:<Drag  width={width} height={height}  historyData={historyData} /> }
  
     
  
      </div>
    );
  }
}

export default App;
