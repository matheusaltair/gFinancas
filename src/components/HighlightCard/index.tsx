import React from 'react';
import { CardView, HeaderCard, TitleCard, Icon, TransactionData, Amount, TransactionDate } from './styles';

interface Props {
  type: 'up' | 'down' | 'total'
  title: string,
  amount: string,
  lastTransaction: string
}
const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}
export function HighlightCard(
  {
    title,
    amount,
    lastTransaction,
    type
  }: Props) {
  return (
    <CardView type={type}>
      <HeaderCard>
        <TitleCard type={type}>{title}</TitleCard>
        <Icon name={icon[type]} type={type} />
      </HeaderCard>
      <TransactionData>
        <Amount type={type}>{amount}</Amount>
        <TransactionDate type={type}>{lastTransaction}</TransactionDate>
      </TransactionData>
    </CardView>
  )
}

