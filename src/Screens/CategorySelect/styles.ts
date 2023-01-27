import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from "react-native-responsive-fontsize";

interface CategoryProps {
  isActive: boolean
}
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

export const Category = styled(TouchableOpacity) <CategoryProps>`
  padding: 16px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary_light : theme.colors.background};
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