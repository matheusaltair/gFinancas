import styled from "styled-components"
import { View, Text, ScrollView } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from "react-native-responsive-fontsize"
import { TouchableOpacity } from "react-native-gesture-handler"

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
export const ActivityContainer = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const Content = styled(ScrollView)`
    flex: 1;
`
export const ChartContainer = styled(View)`
    width: 100%;
    align-items: center;
`

export const MonthSelection = styled(View)`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const MonthSelectionButton = styled(TouchableOpacity)`
`
export const MonthSelectionIcon = styled(Feather)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.text};
`
export const Month = styled(Text)`
   font-size: ${RFValue(18)}px;
   color: ${({ theme }) => theme.colors.text};
`
