import styled, { css } from 'styled-components';
import { Text, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather'

interface TypeProps {
  type: 'up' | 'down' | 'total'
}

export const CardView = styled(View) <TypeProps>`
  margin-right: 16px;
  padding: 26px 25px;
  width: ${RFPercentage(48)}px;
  height: ${RFPercentage(34)}px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.white};
`
export const HeaderCard = styled(View)`
  height: ${RFPercentage(14)}px;
  flex-direction: row;
  justify-content: space-between;
`
export const TitleCard = styled(Text) <TypeProps>`
  font-size: ${RFValue(18)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.white : theme.colors.text};
`
export const Icon = styled(Feather) <TypeProps>`
  font-size: ${RFValue(40)}px;
  ${({ type }) => type === 'up' && css`
  color: ${({ theme }) => theme.colors.success};
  `}
  ${({ type }) => type === 'down' && css`
  color: ${({ theme }) => theme.colors.danger};
  `}
  ${({ type }) => type === 'total' && css`
  color: ${({ theme }) => theme.colors.white};
  `}
`
export const TransactionData = styled(View)`
  margin-top: ${RFValue(16)}px;
`
export const Amount = styled(Text) <TypeProps>`
  font-size: ${RFValue(33)}px;
  font-weight: bold;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.white : theme.colors.text};
`
export const TransactionDate = styled(Text) <TypeProps>`
  margin-top: 10px;
  font-size: ${RFValue(13)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.white : theme.colors.text_light};`