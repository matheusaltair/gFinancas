import React, { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { InputSelect } from '../../components/Form/InputSelect';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { Container, Fields, Form, Header, Title, TransactionType } from './styles'

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  console.log(transactionType)
  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
          <TransactionType>
            <TransactionTypeButton
              title='Income'
              type='up'
              onPress={() => handleTransactionType('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              title='Outcome'
              type='down'
              onPress={() => handleTransactionType('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionType>
          <InputSelect title='Categoria' />

        </Fields>
        <Button title='Enviar' />
      </Form>

    </Container>
  )
}

