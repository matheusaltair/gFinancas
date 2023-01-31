import styled, { css } from 'styled-components';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather'

interface ContainerProps {
  type: 'up' | 'down'
  isActive: boolean
}

interface IconProps {
  type: 'up' | 'down'
}

export const Container = styled(View) <ContainerProps>`
  width: 48%;

  border-radius: 5px;
  border: ${({ isActive }) => isActive ? 0 : 1.5}px ;
  border-style: solid; 
  border-color: ${({ theme }) => theme.colors.text_light};
  ${({ type, isActive }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.success_light};
    border: none;
  `};
  ${({ type, isActive }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.danger_light};
    border: none;
  `};
`
export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;

`

export const Icon = styled(Feather) <IconProps>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.danger};
`
export const Title = styled(Text)`
  margin-left: ${RFValue(12)}px;
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text};
`
