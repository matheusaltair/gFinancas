import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon } from './styles'

interface Props extends TouchableOpacityProps {
  title: string,
  onPress: () => void
}
export function InputSelect({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Icon name='chevron-down' />
    </Container>
  )
}