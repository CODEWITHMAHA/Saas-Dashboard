import { memo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const UserGrowthAreaChart = memo(({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="month" className="text-sm" />
        <YAxis className="text-sm" />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
          }}
        />
        <Area
          type="monotone"
          dataKey="users"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary) / 0.3)"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
});