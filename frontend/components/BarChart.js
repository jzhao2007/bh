import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const BarChartComponent = ({ data, labels }) => {
  const chartData = labels.map((label, index) => ({
    name: label,
    value: data[index],
  }));

  return (
    <BarChart width={600} height={300} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
