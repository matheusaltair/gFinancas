import React from 'react';
import { categories } from '../../utils/categories';
import { CardView, Title, Amount, Name, TransactionData, Footer, CategoryView, Icon } from './styles';

export interface TransactionCardProps {
  name: string,
  amount: string,
  category: string,
  transactionData: string,
  type: 'up' | 'down'
}

interface Props {
  data: TransactionCardProps
}

export function TransactionCard({
  data
}: Props) {
  const [category] = categories.filter(
    item => item.key === data.category
  )

  return (
    <CardView>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === 'down' && "- "}
        {data.amount}
      </Amount>
      <Footer>
        <CategoryView>
          <Icon name={category.icon} size={20} />
          <Name>{category.name}</Name>
        </CategoryView>

        <TransactionData>{data.transactionData}</TransactionData>
      </Footer>
    </CardView>
  )
}

