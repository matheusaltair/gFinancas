import styled from 'styled-components';
import { Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: string
}

export const Container = styled(View) <ContainerProps>`
  width: 100%;
  padding: 13px 24px;
  margin-bottom: 10px; 
  
  flex-direction: row;
  justify-content: space-between;

  border-radius: 5px;
  border-left-width: 4px;
  border-left-color: ${({ color }) => color};

  background-color: ${({ theme }) => theme.colors.white};
`
export const Title = styled(Text)`
  font-size: ${RFValue(14)}px;
  
  color: ${({ theme }) => theme.colors.text};
`
export const Total = styled(Text)`
  font-size: ${RFValue(14)}px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text};
`