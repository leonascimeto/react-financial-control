import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip
} from 'recharts';
import {
  Container,
  ChartContainer,
  Header,
  LegendContainer,
  Legend
} from './styles';
import formatCurrency from '../../utils/formatCurrency';

interface IHistoryBox {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[],
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}


const HistoryBox: React.FC<IHistoryBox> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) => (
  <Container>
    <Header>
      <h2>Histórico de saldo</h2>
      <LegendContainer>
        <Legend color={lineColorAmountEntry} >
          <div>50%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color={lineColorAmountOutput} >
          <div>50%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </Header>
    <ChartContainer>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }} >
          <CartesianGrid strokeDasharray="3 3" stroke="#c1c1c1" />
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip
            formatter={(value: any) => formatCurrency(Number(value))}
            label={false}
          />
          <Line
            type="monotone"
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorAmountEntry}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amountOutput"
            name="Saídas"
            stroke={lineColorAmountOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </Container>
);


export default HistoryBox;
