
'use client'
import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import {Pie} from "react-chartjs-2";
ChartJS.register(
  ArcElement, Tooltip, Legend
)
const PieChartDiv = () => {
  const data = {
    labels:["One","Two","Three","Four","Five","Six","Seven","Eight"],
    datasets:[
      {
        data:[3,3,3,3,3,3,3,3],
        backgroundColor:["#45CB34","#FEA51B","#FE986A","#FF79C9","#8D00CC","#5C48C5","#13C2FF","#0FC690"]
      }
    ]
  }
  const options = {

  }
  return (
    <div style={{ width: '100%'}}>
      <Pie data={data} options={options}>
        
      </Pie>
    </div>
  );
};

export default PieChartDiv;