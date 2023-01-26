import styled from "styled-components";
import { View, Text } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from "react-native-responsive-fontsize";

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

export const Category = styled(View)`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`
export const Name = styled(Text)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 18px;
`
export const Separator = styled(View)`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`
export const Footer = styled(View)`
  width: 100%;
  padding: 24px;
`