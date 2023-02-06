import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { Body, Header, User, Scroller, UserPhoto, UserGreeting, UserName, UserNameView, TransactionList, Transactions, Title } from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string
}
export function Dashboard({ route }) {
  const { data } = route?.params
  console.log(data)
  // const data: DataListProps[] = [
  //   {
  //     id: '1',
  //     type: 'positive',
  //     title: 'Desenvolvimento de site',
  //     amount: 'R$ 10.000,00',
  //     category: {
  //       name: 'Vendas',
  //       icon: 'dollar-sign'
  //     },
  //     transactionData: '19/10/2022'
  //   },
  //   {
  //     id: '2',
  //     type: 'negative',
  //     title: 'Mc Donalds',
  //     amount: 'R$ 35,00',
  //     category: {
  //       name: 'Alimentação',
  //       icon: 'coffee'
  //     },
  //     transactionData: '19/10/2022'
  //   },
  //   {
  //     id: '3',
  //     type: 'negative',
  //     title: 'Aluguel do apartamento',
  //     amount: 'R$ 3.500,00',
  //     category: {
  //       name: 'Contas',
  //       icon: 'file'
  //     },
  //     transactionData: '19/10/2022'
  //   },
  // ]
  return (
    <Body>
      <Header>
        <User>
          <UserPhoto source={require('../../assets/img/PicProfile.jpg')} />
          <UserNameView>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Matheus</UserName>
          </UserNameView>
        </User>
      </Header>
      <Scroller>
        <HighlightCard title='Entrada' amount='R$ 17.980,00' lastTransaction='ultima entrada 12 de Abril' type='up' />
        <HighlightCard title='Saída' amount='R$ 8.500,00' lastTransaction='ultima entrada 12 de Abril' type='down' />
        <HighlightCard title='Total' amount='R$ 9.380,00' lastTransaction='ultima entrada 12 de Abril' type='total' />
      </Scroller>
      <Transactions>
        <Title>Operações</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

      </Transactions>
    </Body>
  )
}

