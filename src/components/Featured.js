import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';


export default function Featured() {

  const data = [
    { name: 'Tobacco-20(T-41)', value: 19 },
    { name: 'Metallized-20', value: 139 },
    { name: 'Composite-25', value: 40 },
    { name: 'Composite-20', value: 159 },
    { name: 'Pearlised-30', value: 23 },
    // { name: 'Composite-30', value: 9 },
    { name: 'Plain-30', value: 50 },
    { name: 'Matallized-18' ,value: 11},
    // { name: 'Composite-18', value: 4 },
    { name: 'Metallisible-20', value: 1 },
    { name: 'Pearlised-25', value: 18 },
    // { name: 'Composite-40', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#1E9ACE'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
        <div class="feat">
          <PieChart width={320} height={350}>
            <Pie
              data={data}
              cx={150}
              cy={150}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
          </PieChart>
        </div>
  )
}



