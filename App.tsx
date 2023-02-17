/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppRoutes from './src/routes/app.routes';
import { SignIn } from './src/Screens/SignIn';
import { AuthProvider } from './src/hooks/AuthContext';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthProvider>
            <SignIn />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

export default App;
