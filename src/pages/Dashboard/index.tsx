import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';
import { format } from 'date-fns';
import listOfMonths from '../../utils/months';

//componentes
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChart from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

//imagens
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import opsImg from '../../assets/ops.svg';

//dados estáticos
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

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
    else if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: "Ops!!",
        description: "Neste mês, não há registros de entradas ou saídas .",
        footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
        icon: opsImg
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
  }, [totalBalance, totalExpenses, totalGains]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = +((totalGains / total) * 100).toFixed(1);
    const percentExpenses = +((totalExpenses / total) * 100).toFixed(1);

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: percentGains ? percentGains : 0,
        color: '#4E41F0'
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: percentExpenses ? percentExpenses : 0,
        color: '#E44C4E'
      }
    ];

    return data;

  }, [totalExpenses, totalGains]);

  const historyData = useMemo(() => {
    return listOfMonths.map((_, month) => {
      let amountEntry = 0;
      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = format(date, 'yyyy');

        if (gainMonth === month && gainYear === yearSelected) {
          try {
            amountEntry += +gain.amount;
          } catch {
            throw new Error('amountEntry is invalid. amountEntry must be a valid number')
          }
        }
      });

      let amountOutput = 0;
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = format(date, 'yyyy');

        if (expenseMonth === month && expenseYear === yearSelected) {
          try {
            amountOutput += +expense.amount;
          } catch {
            throw new Error('amountOutput is invalid. amountOutput must be a valid number')
          }
        }
      });
      return {
        monthNumber: month,
        month: listOfMonths[month].substr(0, 3),
        amountEntry,
        amountOutput
      }
    })
      .filter(item => {
        //filtrar para não mostrar dados dos meses que faltam no ano corrente
        const date = new Date();
        const currentMonth = date.getMonth();
        const currentYear = format(date, 'yyyy');

        return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear);
      });
  }, [yearSelected]);

  const relationGainsRecurrentAndEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains.filter(gain => {
      const date = new Date(gain.date);
      const year = format(date, 'yyyy');
      const month = format(date, 'M');

      return month === monthSelected && year === yearSelected;
    }).forEach(gain => {
      if (gain.frequency === 'recorrente') {
        return amountRecurrent += Number(gain.amount);
      }
      if (gain.frequency === 'eventual') {
        return amountEventual += Number(gain.amount);
      }
    });

    const total = amountRecurrent + amountEventual;

    const percentRecurrent = +((amountRecurrent / total) * 100).toFixed(1);
    const percentEventual = +((amountEventual / total) * 100).toFixed(1);

    return [
      {
        name: 'Recorrente',
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: '#4E41F0'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: percentEventual ? percentEventual : 0,
        color: '#E44C4E'
      }

    ]
  }, [monthSelected, yearSelected]);

  const relationExpensevesRecurrentAndEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses.filter(expense => {
      const date = new Date(expense.date);
      const year = format(date, 'yyyy');
      const month = format(date, 'M');

      return month === monthSelected && year === yearSelected;
    }).forEach(expense => {
      if (expense.frequency === 'recorrente') {
        return amountRecurrent += Number(expense.amount);
      }
      if (expense.frequency === 'eventual') {
        return amountEventual += Number(expense.amount);
      }
    });

    const total = amountRecurrent + amountEventual;

    const percentRecurrent = +((amountRecurrent / total) * 100).toFixed(1);
    const percentEventual = +((amountEventual / total) * 100).toFixed(1);

    return [
      {
        name: 'Recorrente',
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: '#4E41F0'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: percentEventual ? percentEventual : 0,
        color: '#E44C4E'
      }

    ]
  }, [monthSelected, yearSelected]);

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

        <PieChart data={relationExpensesVersusGains} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#4E41F0"
          lineColorAmountOutput="#E44C4E"
        />

        <BarChartBox
          title="Saídas"
          data={relationExpensevesRecurrentAndEventual}
        />

        <BarChartBox
          title="Entradas"
          data={relationGainsRecurrentAndEventual}
        />

      </Content>

    </Container>
  )
}

export default DashBoard;
