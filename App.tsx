/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './src/Screens/Dashboard';
import { Register } from './src/Screens/Register';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  )
}

export default App;
