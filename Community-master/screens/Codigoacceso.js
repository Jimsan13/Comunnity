import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Chip, useTheme, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ShareModal from '../screens/Compartir';
import HeaderComponent from '../components/HeaderComponent';
import Footer from '../components/Footer';
import { MaterialIcons } from '@expo/vector-icons';

const BusinessCo = ({ route }) => {
  const { business } = route.params;
  const theme = useTheme();
  const navigation = useNavigation();
  const [shareModalVisible, setShareModalVisible] = useState(false);

  const handleAddNews = () => {
    // Navegar a la pantalla para agregar novedades
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}/>
      <HeaderComponent />
      <ScrollView style={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Image source={require('../assets/images/logo.png')} style={styles.image} />
            <Text style={styles.title}>{business.name}</Text>
            <Text style={styles.rating}>⭐ {business.rating}</Text>
            <View style={styles.chipsContainer}>
              <Chip
                icon={() => <MaterialIcons name="info" size={20} color="#FFFFFF" />}
                style={[styles.chip, styles.reviewChip]}
                textStyle={styles.chipText}
                onPress={() => navigation.navigate('Reseñas', { business })}
              >
                Reseñas
              </Chip>
              <Chip
                icon={() => <MaterialIcons name="star" size={20} color="#FFFFFF" />}
                style={[styles.chip, styles.proposalChip]}
                textStyle={styles.chipText}
                onPress={() => navigation.navigate('Propuestas', { business })}
              >
                Propuestas
              </Chip>
              <Chip
                icon={() => <MaterialIcons name="share" size={20} color="#000000" />}
                style={[styles.chip, styles.shareChip]}
                textStyle={styles.shareChipText}
                onPress={() => setShareModalVisible(true)}
              >
                Compartir
              </Chip>
            </View>
            <Text style={styles.subtitle}>Novedades del negocio</Text>
            <Text style={styles.description}>{business.description}</Text>
            <View style={styles.accessCodeContainer}>
              <Text style={styles.accessCodeLabel}>Tu código de acceso:</Text>
              <Text style={styles.accessCode}>89UY14</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={handleAddNews}>
              <Text style={styles.addButtonText}>Agregar novedades</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
        <ShareModal 
          visible={shareModalVisible} 
          onClose={() => setShareModalVisible(false)} 
        />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  card: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 18,
    marginVertical: 10,
  },
  chipsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  chip: {
    marginRight: 5,
    marginBottom: 5,
    height: 32,
  },
  reviewChip: {
    backgroundColor: '#2EC6BD',
  },
  proposalChip: {
    backgroundColor: '#2EC6BD',
  },
  chipText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  shareChip: {
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 1,
  },
  shareChipText: {
    color: '#000000',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  accessCodeContainer: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
    alignItems: 'center',
  },
  accessCodeLabel: {
    fontSize: 16,
    color: '#888',
  },
  accessCode: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#2EC6BD',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  headerContainer: {
    marginTop: 35, // linea para modificar la posicion de la barra
  },
});

export default BusinessCo;
