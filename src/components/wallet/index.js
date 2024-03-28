import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

import './index.css'

const data = [
  { name: 'BTC', USD:12230  },
  { name: 'ETH', USD: 3202 },
  { name: 'DOT', USD: 5290 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const App = () => {
  return (
    <div className='wallet-container' id="wallet">
        
    <ResponsiveContainer width="70%" height={300}>
      <PieChart>
        <Pie
          cx="40%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="USD"
        >
          <Cell name="BTC" fill="#F7931A" />
          <Cell name="ETH" fill="#627EEA" />
          <Cell name="DOT" fill="#E6007A" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="left"
        />
      </PieChart>
    </ResponsiveContainer>
    </div>
    
  )
}

export default App