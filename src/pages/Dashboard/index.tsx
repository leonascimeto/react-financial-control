import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';
import { format } from 'date-fns';
import listOfMonths from '../../utils/months';

//componentes
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

//dados estáticos
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import WalletBox from '../../components/WalletBox';

const DashBoard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>(format(new Date(), 'M'));
  const [yearSelected, setYearSelected] = useState<string>(format(new Date(), 'yyyy'));

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, []);

  const years = useMemo(() => {
    //memoriza apenas os anos existentes nos dados
    let uniqueYear: string[] = [];


    [...expenses, ...gains].forEach(item => {
      const year = format(new Date(item.date), 'yyyy');
      if (!uniqueYear.includes(year)) {
        uniqueYear.push(year);
      }
    });

    return uniqueYear.map(year => {
      return {
        value: year,
        label: year
      }
    })

  }, []);

  return (
    <Container>

      <ContentHeader title="DashBoard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={e => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={e => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>

        <WalletBox
          title="saldo"
          amount={150.00}
          footerLabel="Atualizado com base nas entradas e saída"
          icon="dolar"
          color="#4E41F0"
        />

        <WalletBox
          title="entradas"
          amount={5000.00}
          footerLabel="Atualizado com base nas entradas e saída"
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox
          title="saídas"
          amount={4200.00}
          footerLabel="Atualizado com base nas entradas e saída"
          icon="arrowDown"
          color="#E44C4E"
        />

      </Content>

    </Container>
  )
}

export default DashBoard;
