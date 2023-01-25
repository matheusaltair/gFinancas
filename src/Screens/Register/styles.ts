import styled from 'styled-components';
import { Image, Text, View, ScrollView, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(View)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`
export const Header = styled(View)`
    width: 100%;
    height: ${RFValue(100)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFValue(26)}px;;
    background-color: ${({ theme }) => theme.colors.primary};
`
export const Title = styled(Text)`
   font-size: ${RFValue(18)}px;
   color: ${({ theme }) => theme.colors.white};
`
export const Form = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding: 24px;
`
export const Fields = styled(View)`
`
export const TransactionType = styled(View)`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 16px;
`