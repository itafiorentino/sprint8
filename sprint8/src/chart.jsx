import React from "react";
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


function Chart() {

  const array2Data = useSelector((state) => state.data.array2);

  return (
    <div className="flex pr-10 justify-center max-w-full mb-10">
    <BarChart
      width={500}
      height={300}
      data={array2Data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="city" />
      <YAxis />
      <Tooltip />
      <Legend className="pr-20"/>
      <Bar dataKey="cityKm2" fill="#0DA643" />
      <Bar dataKey="treeCoverKm" fill="#55D983" />
      <Bar dataKey="treePercentage" fill="#93BFAB" />
    </BarChart>
    </div>
  );
}

export default Chart;