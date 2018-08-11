import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer}  from 'recharts'

import {ResizableBox } from 'react-resizable';


export default class HistoryChart extends Component {

  render() {

const {historyData,height,width}=this.props
    return (



	<LineChart  width={width*0.90}  height={height} aspx data={historyData}
     >
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="CAD" stroke="#8884d8" />
       <Line type="monotone" dataKey="AUD" stroke="#82ca9d" />
       <Line type="monotone" dataKey="USD" stroke="#da1a1a" />
      </LineChart>






    )
  }
}
