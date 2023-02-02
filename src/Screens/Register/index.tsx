import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';
import * as Yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { InputSelect } from '../../components/Form/InputSelect';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Fields, Form, Header, Title, TransactionType } from './styles'


interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  amount: Yup.number().typeError('Digite um número').required('O valor é obrigatório').positive('O valor deve ser positivo')
})

export function Register() {
  const dataKey = '@gFinancas:transaction'

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const [transactionType, setTransactionType] = useState('')
  const [category, setCategory] = useState({
    name: 'Categoria',
    key: 'category'
  })
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)


  async function handleRegister(form: FormData) {
    const newData = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(newData)

    try {
      const data = await AsyncStorage.getItem(dataKey)
      const currentData = data ? JSON.parse(data) : []

      const AllData = [
        ...currentData,
        newData
      ]

      await AsyncStorage.setItem(dataKey, JSON.stringify(AllData))

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getAsync() {

      const Items = await AsyncStorage.getItem(dataKey)
      console.log(JSON.parse(Items!))
    }
    getAsync()

  }, []);
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
            error={errors.name && errors.name.message}
          />
          <InputForm
            name='amount'
            control={control}
            placeholder='Preço'
            error={errors.amount && errors.amount.message}
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
          setCloseCategoryModal={HandleCloseModal} />
      </Modal>

    </Container>
  )
}

