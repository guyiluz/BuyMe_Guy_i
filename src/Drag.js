import React, { Component } from 'react';
import {Rnd} from 'react-rnd'
import HistoryChart from "./HistoryChart"
class Drag extends Component {
  constructor( props){
    super(props)
    
    this.state={
     width:600,
    height:250,
    x: 0,
    y: 0
    }
  }

  componentDidMount(){

if(localStorage.getItem('postionAndSize')){


  const postionAndSize =JSON.parse(localStorage.getItem('postionAndSize'))

  this.setState({
    x:postionAndSize.x,        
    y:postionAndSize.y,           
    width: postionAndSize.width ,
    height:postionAndSize.height,
    
    
        })


}

  }

  onResize=(e, direction, ref, delta, position)=>{
    localStorage.setItem('postionAndSize',JSON.stringify(this.state))

    
    this.setState({
x:position.x,        
y:position.y,           
width: parseInt(ref.style.width) ,
height: parseInt(ref.style.height),


    })




  }

  onDragEnd=(e,d)=>{
    console.log(e,d);
    this.setState({ x: d.x, y: d.y },()=>{
      localStorage.setItem('postionAndSize',JSON.stringify(this.state))
    }
    )




  }

 
  render() {
      const {historyData}=this.props
      const {width,height,x,y}=this.state
      let defaultParam;
      if(localStorage.getItem('postionAndSize')!==null){
        const postionAndSize =JSON.parse(localStorage.getItem('postionAndSize'))

        defaultParam=  {
          x:postionAndSize.x,        
          y:postionAndSize.y,           
          width: postionAndSize.width ,
          height:postionAndSize.height}
        

        }else{

          defaultParam=  {
            x:0,        
            y:0,           
            width: 600 ,
            height:250}

        }

        
    return (
        <Rnd style={{
            border: "2px solid",          

        }}
        default={
          {...defaultParam}
        }

        onResize={(e, direction, ref, delta, position) =>{this.onResize(e, direction, ref, delta, position)} }
        onDragStop={(e, d) => { this.onDragEnd( e,d ) }}
      >


      <HistoryChart  height={height} width={width} historyData={historyData}/>
     </Rnd>
    );
  }
}


export default Drag;
