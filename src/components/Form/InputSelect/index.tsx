import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}
export function InputSelect({ title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name='chevron-down' />
    </Container>
  )
}