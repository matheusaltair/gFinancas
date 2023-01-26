import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { InputSelect } from '../../components/Form/InputSelect';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Fields, Form, Header, Title, TransactionType } from './styles'

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [category, setCategory] = useState({
    name: 'category',
    key: 'Categoria'
  })
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)


  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function HandleOpenModal() {
    setCategoryModalOpen(true)
  }
  function HandleCloseModal() {
    setCategoryModalOpen(false)
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
          <InputSelect title='Categoria' onPress={() => HandleOpenModal()} />

        </Fields>
        <Button title='Enviar' />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          setCloseCategoryModal={() => HandleCloseModal()} />
      </Modal>

    </Container>
  )
}

