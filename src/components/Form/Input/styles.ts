import styled from 'styled-components'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TextInput).attrs({
  placeholderTextColor: 'rgba(60, 60, 59, 0.4)'
})`
  margin-bottom: ${RFValue(8)}px;
  width: 100%;
  padding: 18px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  border-radius: 6px;
`