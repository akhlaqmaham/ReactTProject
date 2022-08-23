import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chartdash() {

    const data1 = [
        {
            name: 'Tobacco-20(T-41)',
            uv: 19,
            // pv: 2400,
            // amt: 2400,
        },
        {
            name: 'Metallized-20',
            uv: 139,
            // pv: 1398,
            // amt: 2210,
        },
        {
            name: 'Composite-25',
            uv: 40,
            // pv: 9800,
            // amt: 2290,
        },
        {
            name: 'Composite-20',
            uv: 159,
            // pv: 3908,
            // amt: 2000,
        },
        {
            name: 'Pearlised-30',
            uv: 23,
            // pv: 4800,
            // amt: 2181,
        },
        {
            name: 'Composite-30',
            uv: 9,
            // pv: 3800,
            // amt: 2500,
        },
        {
            name: 'Plain-30',
            uv: 50,
            // pv: 4300,
            // amt: 2100,
        },
        {
            name: 'Matallized-18',
            uv: 11,
        },
        {
            name: 'Composite-18',
            uv: 4,
        },
         {
            name: 'Metallisible-20',
            uv: 1,
         }, 
         {
            name: 'Pearlised-25',
            uv: 18,
         },
         {
            name: 'Composite-40',
            uv: 5,
         }

    ];

    return (
        <div class="chart1">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={400}
                    data={data1}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}