import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import DashBoard from './pages/Dashboard';
import Layout from './components/Layout';
import dark from './styles/themes/dark';
import ligth from './styles/themes/ligth';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}

export default App;
