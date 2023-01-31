import styled from "styled-components";
import { View, Text } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(View)`
  width: 100%;
`
export const Error = styled(Text)`
  font-size: ${RFValue(14)}px;
  color: red;
`