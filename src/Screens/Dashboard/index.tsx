import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { Body, Header, User, Scroller, UserPhoto, UserGreeting, UserName, UserNameView, TransactionList, Transactions, Title, ActivityContainer } from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string
}

interface HighlightValue {
  amount: string
}

interface HighlightProps {
  inputs: HighlightValue,
  outputs: HighlightValue,
  total: HighlightValue
}

export function Dashboard() {
  const theme = useTheme()
  const [data, setData] = useState<DataListProps>()
  const [loading, setLoading] = useState<boolean>(true)
  const [highlightValues, setHighlightValues] = useState<HighlightProps>({} as HighlightProps)


  async function loadData() {
    let inputTotal = 0
    let outputTotal = 0

    const dataKey = '@gFinancas:transaction'

    const response = await AsyncStorage.getItem(dataKey)

    const transactions = response ? JSON.parse(response) : []

    const formattedTransactions = transactions.map((item: DataListProps) => {

      if (item.type === 'up') {
        inputTotal += Number(item.amount)
      } else {
        outputTotal += Number(item.amount)
      }

      const amount = Number(item.amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.transactionData))

      return {
        id: item.id,
        name: item.name,
        amount,
        category: item.category,
        transactionData: date,
        type: item.type,
      }
    })

    const total = inputTotal + outputTotal

    setHighlightValues({
      inputs: {
        amount: inputTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },
      outputs: {
        amount: outputTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },

    })
    setData(formattedTransactions)
    setLoading(false)

  }

  useFocusEffect(useCallback(() => {
    loadData()
  }, []))

  return (
    <Body>
      {
        loading ?
          <ActivityContainer>
            <ActivityIndicator color={theme.colors.primary} size='large' />
          </ActivityContainer>
          :
          <>
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
              <HighlightCard title='Entrada' amount={highlightValues.inputs.amount} lastTransaction='ultima entrada 12 de Abril' type='up' />
              <HighlightCard title='Saída' amount={highlightValues.outputs.amount} lastTransaction='ultima entrada 12 de Abril' type='down' />
              <HighlightCard title='Total' amount={highlightValues.total.amount} lastTransaction='ultima entrada 12 de Abril' type='total' />
            </Scroller>
            <Transactions>
              <Title>Operações</Title>
              <TransactionList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TransactionCard data={item} />}
              />

            </Transactions>
          </>
      }
    </Body>

  )
}

