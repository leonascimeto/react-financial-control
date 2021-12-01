import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';
import { format } from 'date-fns';
import listOfMonths from '../../utils/months';

//componentes
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

//imagens
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';


//dados estáticos
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = format(date, 'yyyy');
      const month = format(date, 'M');

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be number');
        }
      }
    });

    return total;

  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = format(date, 'yyyy');
      const month = format(date, 'M');

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be number');
        }
      }
    });

    return total;

  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
        icon: sadImg
      }
    }
    else if (totalBalance === 0) {
      return {
        title: "Ufaa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No próximo mês tente econômizar mais.",
        icon: grinningImg
      }
    }
    else {
      return {
        title: "Muito bem!",
        description: "Sua carteira esta positiva!",
        footerText: "Continue assim. Considere investir seu saldo.",
        icon: happyImg
      }
    }
  }, [totalBalance])

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
          amount={totalBalance}
          footerLabel="Atualizado com base nas entradas e saída"
          icon="dolar"
          color="#F7931B"
        />

        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel="Atualizado com base nas entradas e saída"
          icon="arrowUp"
          color="#4E41F0"
        />
        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerLabel="Atualizado com base nas entradas e saída"
          icon="arrowDown"
          color="#E44C4E"
        />

        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />

      </Content>

    </Container>
  )
}

export default DashBoard;
