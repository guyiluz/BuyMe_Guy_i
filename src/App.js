import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drag from './Drag'
import moment from 'moment'
import ReactLoading from 'react-loading';

class App extends Component {
constructor(props){
super(props)

this.state={
historyData:[],
day:8


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

    const {day,historyData}=this.state
    return (
      <div className="App">

      { day!==1?     <ReactLoading type="balls" color="blue" height={100} width={100} />:<Drag   historyData={historyData} /> }

  
     
  
      </div>
    );
  }
}

export default App;
