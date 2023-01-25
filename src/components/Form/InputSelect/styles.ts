import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  border-radius: 5px;
`
export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(14)}px;
`
export const Icon = styled(Feather)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_light};
`