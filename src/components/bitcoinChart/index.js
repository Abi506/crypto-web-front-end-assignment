import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    year: 2013,
    price: 13,
  },
  {
   year:2014,
   price:1238
  },
  {
    year:2015,
   price:315
  },
  {
    year:2016,
   price:900
  },
  {
    year:2017,
   price:20145
  },
  {
    year:2018,
    price:19320
  },
  {
    year:2019,
    price:10000,
  },
  {
    year:2020,
    price:29000
  },
  {
    year:2021,
    price:49254
  },
];

class Bitcoin extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
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
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="year" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
export default Bitcoin