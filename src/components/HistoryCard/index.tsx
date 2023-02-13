import React from 'react';
import { Container, Title, Total } from './styles';

interface HistoryCardProps {
  color: string,
  title: string,
  total: string
}

export function HistoryCard({ color, title, total }: HistoryCardProps) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Total>{total}</Total>
    </Container>
  )
}

