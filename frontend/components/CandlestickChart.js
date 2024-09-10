import React from 'react';
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';

const CandlestickChart = ({ data }) => {
  return (
    <ComposedChart width={600} height={300} data={data}>
      <XAxis dataKey="x" />
      <YAxis domain={['auto', 'auto']} />
      <Tooltip
        labelFormatter={(value) => `Date: ${value}`}
        formatter={(value, name) => [`${value}`, name.charAt(0).toUpperCase() + name.slice(1)]}
      />
      <Legend />
      <Bar dataKey="low" fill="#8884d8" />
      <Bar dataKey="high" fill="#82ca9d" />
      <ReferenceLine y={0} stroke="#000" />
    </ComposedChart>
  );
};

export default CandlestickChart;
