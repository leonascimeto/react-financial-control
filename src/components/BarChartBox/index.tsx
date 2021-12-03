import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip
} from 'recharts'
import {
  Container,
  SideLeft,
  SideRigth,
  LegendContainer,
  Legend,
} from './styles';

import formatCurrency from '../../utils/formatCurrency';

interface IBarChartProps {
  title: string,
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[]
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>

        <LegendContainer>
          {
            data.map((indicator, index) => (
              <Legend key={index} color={indicator.color} >
                <div>{indicator.percent}%</div>
                <span>{indicator.name}</span>
              </Legend>
            ))
          }
        </LegendContainer>
      </SideLeft>
      <SideRigth>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount" name="valor">
              {
                data.map(indicator => (
                  <Cell
                    key={indicator.name}
                    cursor="pointer"
                    fill={indicator.color}
                  />
                ))
              }
            </Bar>
            <Tooltip
              cursor={{ fill: 'none' }}
              formatter={(value: any) => formatCurrency(Number(value))}
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRigth>

    </Container>
  )
}

export default BarChartBox;
