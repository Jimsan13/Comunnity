import React from 'react';
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    name: 'Servicio de internet',
    rating: '2.9',
    description: 'Ofrecemos planes de Internet de banda ancha que se adaptan a tus necesidades, con velocidades que van desde los 50 MBps hasta 1 Gbps, asegurando que siempre estés conectado sin interrupciones.',
    image: 'https://via.placeholder.com/100', // imagen
  },
  {
    id: '2',
    name: 'Servicio de internet',
    rating: '2.9',
    description: 'Ofrecemos planes de Internet de banda ancha que se adaptan a tus necesidades, con velocidades que van desde los 50 MBps hasta 1 Gbps, asegurando que siempre estés conectado sin interrupciones.',
    image: 'https://via.placeholder.com/100', //imagen
  },
];

const ItemList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BusinessDetails', { business: item })}>
      <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 10, marginRight: 10 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Card style={{ margin: 10, backgroundColor: 'white', borderRadius: 10 }}>
      <Card.Content>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 10 }}
        />
      </Card.Content>
    </Card>
  );
};

export default ItemList;
