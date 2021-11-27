import React from 'react';

import { Container, ToogleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => (
  <Container>
    <ToogleLabel>Light</ToogleLabel>
    <ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => { console.log('change') }}
    />
    <ToogleLabel>Dark</ToogleLabel>
  </Container>
)

export default Toggle;
