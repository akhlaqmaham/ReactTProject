import '../App.css';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Metallisible-20',
        pv:1,
    },
    {
        name: 'Plain-20',
        pv:1,
    },
    {
        name: 'Composite-18',
        pv:4,
    },
    {
        name: 'Composite-40',
        pv:5,
    },
    {
        name: 'Composite-30',
        pv:9,
    },
    {
        name: 'Metallized-18',
        pv:11,
    },
    {
        name: 'Pearlised-25',
        pv:18,
    },
    {
        name: 'Tobacco-2(T-41)',
        pv:19,
    },
    {
        name: 'Pearlised-30',
        pv:23,
    },
    {
        name: 'Composite-25',
        pv:40,
    },
    {
        name: 'Plain-30',
        pv:50,
    },
    {
        name: 'Metallized-20',
        pv:139,
    },
    {
        name: 'Composite-20',
        pv:159,
    },
];

function App() {


    return (
        <ResponsiveContainer  aspect={3}>
            <LineChart className='lnchart'         
                width={100}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 70,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis  dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    
    );
}
export default App;