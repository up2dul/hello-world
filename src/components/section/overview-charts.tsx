import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Aug',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Sep',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Oct',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 200),
  },
  {
    name: 'Dec',
    total: Math.floor(Math.random() * 200),
  },
];

export const OverviewCharts = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis orientation="right" />
        <Tooltip />
        <Legend verticalAlign="top" align="center" />
        <Line type="monotone" dataKey="total" stroke="#3751ff" />
      </LineChart>
    </ResponsiveContainer>
  );
};
