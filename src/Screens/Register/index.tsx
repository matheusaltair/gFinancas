import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';
import * as Yup from 'yup'
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';
import { InputSelect } from '../../components/Form/InputSelect';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Fields, Form, Header, Title, TransactionType } from './styles'

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [category, setCategory] = useState({
    name: 'Categoria',
    key: 'category'
  })
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)

  const { control, handleSubmit } = useForm()

  function handleRegister(form: FormData) {
    const data = {
      transactionType,
      name: form.name,
      amount: form.amount,
      category: category.key
    }
    console.log(data)
  }

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
          <InputForm
            name='name'
            control={control}
            placeholder='Nome'
          />
          <InputForm
            name='amount'
            control={control}
            placeholder='Preço'
          />
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
          <InputSelect title={category.name} onPress={() => HandleOpenModal()} />

        </Fields>
        <Button
          title='Enviar'
          onPress={handleSubmit(handleRegister)} />
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

