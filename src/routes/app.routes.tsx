import React from 'react'
import { Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../Screens/Dashboard';
import { Register } from '../Screens/Register';
import { Resume } from '../Screens/Resume';
import { SignIn } from '../Screens/SignIn';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {

  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 68,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}>
      <Screen
        name='Listagem'
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color} />
          )
        }}
      />
      <Screen
        name='Cadastrar'
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='attach-money'
              size={size}
              color={color} />
          )
        }}
      />
      <Screen
        name='Resumo'
        component={Resume}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='pie-chart'
              size={size}
              color={color} />
          )
        }}
      />
    </Navigator>
  )
}
