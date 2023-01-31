import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Button, Title, Icon } from './styles';

export interface Props extends RectButtonProps {
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
    <Container isActive={isActive} type={type} >
      <Button {...rest}>
        <Icon name={icon[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  )
}

