import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, AreaChart, Area } from 'recharts';
import './index.css';

const data = [
  {
    year: 2013,
    price: 13,
  },
  {
    year: 2014,
    price: 1238
  },
  {
    year: 2015,
    price: 315
  },
  {
    year: 2016,
    price: 900
  },
  {
    year: 2017,
    price: 20145
  },
  {
    year: 2018,
    price: 19320
  },
  {
    year: 2019,
    price: 10000,
  },
  {
    year: 2020,
    price: 29000
  },
  {
    year: 2021,
    price: 49254
  },
];

class Population extends PureComponent {
  render() {
    const { populationData } = this.props;
    console.log(populationData, 'population data in chat');
    return (
      <div className='chart-container'>
        <h1 className='bitcoin-price-heading'>US Population Growth</h1>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            width={500}
            height={300}
            data={populationData}
            margin={{
              top: 0,
              right: 30,
              left: 24,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke='none' />
            <XAxis dataKey="year" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Line type="monotone" dataKey="population" stroke="#82ca9d" />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Label
              value="Population"
              position="top"
              style={{ textAnchor: 'middle', fill: '#666' }}
            />
          </LineChart>
        </ResponsiveContainer>
        <h1 className='bitcoin-price-heading'>Bitcoin Price History</h1>
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke='none' />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Population;
