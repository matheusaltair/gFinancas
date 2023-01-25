import styled from 'styled-components';
import { Image, Text, View, ScrollView, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { DataListProps } from '.';


export const Body = styled(View)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`
export const Header = styled(View)`
    padding: 25px;
    height: ${RFPercentage(38)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`
export const User = styled(View)`
    flex-direction: row;
    align-items: center;
`
export const UserPhoto = styled(Image)`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    border-radius: 10px;
`
export const UserNameView = styled(View)`
    margin-left: 20px;
`
export const UserGreeting = styled(Text)`
    font-size: 16;
    color: ${({ theme }) => theme.colors.title};
`
export const UserName = styled(Text)`
    font-size: 16;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.title};
`
export const Scroller = styled(ScrollView).attrs({
    contentContainerStyle: { paddingHorizontal: 24 },
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(12)}px;
`
export const TransactionList = styled(FlatList as new () => FlatList<DataListProps>)`

`
export const Transactions = styled(View)`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(11)}px;
`
export const Title = styled(Text)`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${RFPercentage(2)}px;
`
