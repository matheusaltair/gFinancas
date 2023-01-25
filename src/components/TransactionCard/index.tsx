import React from 'react';
import { CardView, Title, Amount, Name, TransactionData, Footer, CategoryView, Icon } from './styles';

interface Category {
  name: string,
  icon: string
}

export interface TransactionCardProps {
  title: string,
  amount: string,
  category: Category,
  transactionData: string,
  type: 'positive' | 'negative'
}

interface Props {
  data: TransactionCardProps
}

export function TransactionCard({
  data
}: Props) {
  return (
    <CardView>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && "-"}
        {data.amount}
      </Amount>
      <Footer>
        <CategoryView>
          <Icon name={data.category.icon} size={20} />
          <Name>{data.category.name}</Name>
        </CategoryView>

        <TransactionData>{data.transactionData}</TransactionData>
      </Footer>
    </CardView>
  )
}

