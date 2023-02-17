import styled from 'styled-components'
import { View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled(View)`
  width: 100%;
  height: 70%;

  padding: 0 40px;

  justify-content: space-evenly;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
`

export const Logo = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 3px;


  color: ${({ theme }) => theme.colors.white};
`

export const Title = styled(Text)`
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 1.4px;

  text-align: center;
  line-height: 43px;

  color: ${({ theme }) => theme.colors.white};
`

export const SubTitle = styled(Text)`
  text-align: center;
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white};
`

export const Footer = styled(View)`
  width: 100%;
  height: 30%;

  padding: 0 35px;

  background-color: ${({ theme }) => theme.colors.secondary};
`

export const ButtonContainer = styled(View)`
  margin-top: -25px;
`

export const LoginSocialButton = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px;

  background-color: ${({ theme }) => theme.colors.white};
`

export const IconSocial = styled(AntDesign)`
  font-size: 25px;
  color: black;
`

export const TextButtonLoginSocial = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;

  margin-right: 30px;
  
  color: ${({ theme }) => theme.colors.black};
`
