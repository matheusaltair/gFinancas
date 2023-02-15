import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from 'react-native';
import { Container, Content, Header, MonthSelection, MonthSelectionButton, MonthSelectionIcon, Month, Title, ChartContainer, ActivityContainer } from "./styles";
import { HistoryCard } from "../../components/HistoryCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { categories } from "../../utils/categories";
import { VictoryPie } from "victory-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";
import { addMonths, format, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useFocusEffect } from "@react-navigation/native";

interface TransactionProps {
  name: string,
  amount: string,
  category: string,
  transactionData: string,
  type: 'up' | 'down'
}

interface CategoriesProps {
  key: string,
  name: string,
  total: string,
  color: string,
  percent: string
}

export function Resume() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [totalByCategory, setTotalByCategory] = useState<CategoriesProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  function handleChangeDate(action: 'next' | 'prev') {
    setIsLoading(true)
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1))
    } else {
      setSelectedDate(subMonths(selectedDate, 1))
    }
  }

  async function getData() {
    const dataKey = '@gFinancas:transaction'

    const response = await AsyncStorage.getItem(dataKey)

    const responseFormatted = response ? JSON.parse(response) : []

    const expensives = responseFormatted.filter(
      (category: TransactionProps) => category.type === 'down' &&
        new Date(category.transactionData).getMonth() === selectedDate.getMonth()
        && new Date(category.transactionData).getFullYear() === selectedDate.getFullYear()
    )

    const totalExpensive = expensives.reduce(
      (accumulator: Number, expensive: TransactionProps) => {
        return accumulator + expensive.amount
      }, 0);

    const totalCategories: CategoriesProps[] = []

    categories.forEach(category => {

      let categorySum = 0

      expensives.forEach((item: TransactionProps) => {
        if (item.category === category.key)
          categorySum += Number(item.amount)
      })

      const total = categorySum.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })

      const percent = `${(categorySum / totalExpensive * 100).toFixed(0)}%`

      if (categorySum > 0) {
        totalCategories.push({
          key: category.key,
          name: category.name,
          total,
          color: category.color,
          percent
        })
      }

    });

    setTotalByCategory(totalCategories)
    setIsLoading(false)
  }

  useFocusEffect(useCallback(() => {
    getData()
  }, [selectedDate]))

  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>
      <Content contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: useBottomTabBarHeight() }}>
        {
          isLoading ?
            <>
              <ActivityContainer>
                <ActivityIndicator color={theme.colors.primary} size='large' />
              </ActivityContainer>
            </>
            :
            <>
              <MonthSelection>
                <MonthSelectionButton onPress={() => handleChangeDate('prev')}>
                  <MonthSelectionIcon name='chevron-left' />
                </MonthSelectionButton>
                <Month>{format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}</Month>
                <MonthSelectionButton onPress={() => handleChangeDate('next')}>
                  <MonthSelectionIcon name='chevron-right' />
                </MonthSelectionButton>
              </MonthSelection>
              <ChartContainer>
                <VictoryPie
                  data={totalByCategory}
                  style={{
                    labels: {
                      fontSize: RFValue(20),
                      fontWeight: 'bold',
                      fill: theme.colors.white
                    }
                  }}
                  labelRadius={55}
                  colorScale={totalByCategory.map(item => item.color)}
                  x='percent'
                  y='total'
                />
              </ChartContainer>

              {totalByCategory.map(item => (
                <HistoryCard
                  key={item.key}
                  title={item.name}
                  total={item.total}
                  color={item.color}
                />
              ))
              }
            </>
        }
      </Content>
    </Container>
  )
}