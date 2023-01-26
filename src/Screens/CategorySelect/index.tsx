import React from 'react'
import { FlatList, Modal } from 'react-native'
import { Container, Header, Title, Category, Icon, Name, Separator, Footer } from './styles'
import { categories } from '../../utils/categories'
import { Button } from '../../components/Form/Button'

interface Category {
  name: string,
  key: string
}

interface Props {
  category: Category,
  setCategory: (category: Category) => void,
  setCloseCategoryModal: () => void
}

export function CategorySelect({ category, setCategory, setCloseCategoryModal }: Props) {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>

      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name>
              {item.name}
            </Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button
          title='Selecionar'
          onPress={setCloseCategoryModal} />
      </Footer>
    </Container>
  )
}