import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
  const { type } = useParams();

  const titleOptions = useMemo(() => {
    return type === 'entry-balance' ?
      { title: 'Entradas', lineColor: '#F7931B' }
      :
      { title: 'Saídas', lineColor: '#E44C4E' }
  }, [type]);

  const months = [
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' }
  ];

  const years = [
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 }
  ];

  return (
    <Container>
      <ContentHeader title={titleOptions.title} lineColor={titleOptions.lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent" >Recorrentes</button>
        <button type="button" className="tag-filter tag-filter-eventual" >Eventuais</button>
      </Filters>
      <Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

      </Content>
    </Container>
  )
}

export default List;
