import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const DashBoard: React.FC = () => {

  const options = [
    { value: 'Douglas', label: 'Douglas' },
    { value: 'Ana', label: 'Ana' },
    { value: 'Jonas', label: 'Jonas' },
  ];

  return (
    <Container>
      <ContentHeader title="DashBoard" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>

    </Container>
  )
}

export default DashBoard;
