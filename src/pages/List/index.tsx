import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import { format } from 'date-fns';
import listOfMonths from '../../utils/months'

interface IData {
  description: string;
  amountFormated: string;
  frequency: string;
  dateFormated: string;
  tagColor: string;
}

const List: React.FC = () => {
  const { type } = useParams();
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(format(new Date(), 'M'));
  const [yearSelected, setYearSelected] = useState<string>(format(new Date(), 'yyyy'));
  const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);


  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type])

  const titleOptions = useMemo(() => {
    return type === 'entry-balance' ?
      { title: 'Entradas', lineColor: '#F7931B' }
      :
      { title: 'Saídas', lineColor: '#E44C4E' }
  }, [type]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, []);


  const years = useMemo(() => {
    let uniqueYear: number[] = [];

    listData.forEach(item => {
      const year = Number(format(new Date(item.date), 'yyyy'));
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

  }, [listData]);

  const handleFrequencyClick = (frequency: string) => {
    const alReadySelected = selectedFrequency.findIndex(item => item === frequency);


    if (alReadySelected >= 0) {
      const filtered = selectedFrequency.filter(item => item !== frequency);
      setSelectedFrequency(filtered);
    }
    else {
      setSelectedFrequency((prev) => [...prev, frequency]);
    }
  }

  useEffect(() => {

    const filteredDate = listData.filter(item => {
      const date = new Date(item.date);
      const month = format(date, 'M');
      const year = format(date, 'yyyy');

      return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
    });

    const formattedData = filteredDate.map(item => {
      return {
        description: item.description,
        amountFormated: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormated: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41f0' : '#E44C4E',
      }
    })
    setData(formattedData);
  }, [listData, monthSelected, selectedFrequency, yearSelected]);

  return (
    <Container>
      <ContentHeader title={titleOptions.title} lineColor={titleOptions.lineColor}>
        <SelectInput options={months} onChange={e => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={e => setYearSelected(e.target.value)} defaultValue={yearSelected} />
      </ContentHeader>

      <Filters>

        <button type="button"
          className={`tag-filter tag-filter-recurrent ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>

        <button type="button"
          className={`tag-filter tag-filter-eventual ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>

      </Filters>

      <Content>
        {
          data.map((item, index) =>
            <HistoryFinanceCard
              key={index}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormated}
              amount={item.amountFormated}
            />
          )
        }
      </Content>

    </Container>
  )
}

export default List;
