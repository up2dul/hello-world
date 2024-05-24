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

import { overviewChartsData } from '~/lib/data';

export const OverviewCharts = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        width={500}
        height={300}
        data={overviewChartsData}
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
        <Tooltip labelStyle={{ color: '#020817' }} />
        <Legend verticalAlign="top" align="center" />
        <Line type="monotone" dataKey="total" stroke="#3751ff" />
      </LineChart>
    </ResponsiveContainer>
  );
};
