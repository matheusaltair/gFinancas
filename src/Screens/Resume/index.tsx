import React, { useEffect } from "react";
import { Container, Header, Title } from "./styles";
import { HistoryCard } from "../../components/HistoryCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Resume() {

  async function getData() {
    const dataKey = '@gFinancas:transaction'

    const response = await AsyncStorage.getItem(dataKey)

    const transactions = response ? JSON.parse(response) : []

    console.log(transactions)
  }
  useEffect(() => {
    getData()
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>
      <HistoryCard color="red" title="Card" total="R$1.200" />
    </Container>
  )
}