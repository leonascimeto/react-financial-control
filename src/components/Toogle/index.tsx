import React from 'react';

import { Container, ToogleLabel, ToggleSelector } from './styles';

interface IToogleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToogleProps> = ({ labelLeft, labelRight, checked, onChange }) => (
  <Container>
    <ToogleLabel>{labelLeft}</ToogleLabel>
    <ToggleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    {console.log('flag: ', checked)}
    <ToogleLabel>{labelRight}</ToogleLabel>
  </Container>
)

export default Toggle;
