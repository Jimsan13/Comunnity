import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';

const data = [
  {
    id: '1',
    title: 'Servicio de Internet',
    description: 'Ofrecemos planes de Internet de banda ancha que se adaptan a tus necesidades...',

  },
  // Repite este objeto para más elementos
];

const ItemList = () => {
  const renderItem = ({ item }) => (
    <Card style={{ marginBottom: 10 }}>
      <Card.Content>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: 10 }}
    />
  );
};

export default ItemList;
