import styled, { css } from 'styled-components';
import { Image, Text, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather'
import theme from '../../global/styles/theme';

interface TypeProps {
  type: 'positive' | 'negative'
}

export const CardView = styled(View)`
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${RFValue(10)}px;
`
export const Title = styled(Text)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`
export const Amount = styled(Text) <TypeProps>`
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(6)}px;
  color: ${({ theme, type }) =>
    type === 'positive' ? theme.colors.success : theme.colors.danger}
`
export const Footer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(12)}px;
`
export const CategoryView = styled(View)`
  flex-direction: row;
  align-items: center;
`
export const Icon = styled(Feather)`
   color: ${({ theme }) => theme.colors.text_light};
`
export const Name = styled(Text)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_light};
  margin-left: ${RFValue(14)}px;
;
`
export const TransactionData = styled(Text)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_light};
`
