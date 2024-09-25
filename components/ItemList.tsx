// ItemList.tsx
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ServerIP from './ipServer'; // Ajusta la ruta según sea necesario

interface Service {
  id: number;
  name: string;
  image: string;
  qualification: number;
  description: string | boolean;
}

const ItemList = () => {
  const [data, setData] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<NavigationProp<any>>();

  const fetchData = async () => {
    const url = `${ServerIP}/services`; // Construye la URL usando la IP

    try {
      const response = await fetch(url);
      const services: Service[] = await response.json();
      setData(services);
    } catch (error) {
      setError('Error al obtener los servicios');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderItem = ({ item }: { item: Service }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BusinessDetails', { business: item })}>
      <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
        <Image
          source={{ uri: item.image ? `data:image/jpeg;base64,${atob(item.image)}` : 'https://w.wallhaven.cc/full/o5/wallhaven-o5xmv9.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 10, marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
          <Text>Calificación: {item.qualification}</Text>
          <Text>Descripción: {typeof item.description === 'string' ? item.description : 'No disponible'}</Text>
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
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ padding: 10 }}
        />
      </Card.Content>
    </Card>
  );
};

export default ItemList;