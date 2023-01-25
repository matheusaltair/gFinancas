import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon } from './styles';

export interface Props extends TouchableOpacityProps {
  type: 'up' | 'down',
  isActive: boolean,
  title: string,

}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

export function TransactionTypeButton(
  {
    type,
    isActive,
    title,
    ...rest
  }: Props) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon name={icon[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}

