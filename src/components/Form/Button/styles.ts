import styled from 'styled-components'
import { TouchableOpacity, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TouchableOpacity)`
  border-radius: 5px;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
`

export const Title = styled(Text)`
  font-size: ${RFValue(14)}px;
  color:  ${({ theme }) => theme.colors.white};
`