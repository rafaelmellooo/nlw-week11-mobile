import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Incident: React.FC = () => {
  const navigation = useNavigation();

  const navigateToInfo = () => {
    navigation.navigate('Info');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.property}>ONG:</Text>
      <Text style={styles.value}>APAD</Text>

      <Text style={styles.property}>CASO:</Text>
      <Text style={styles.value}>Cadelinha atropelada</Text>

      <Text style={styles.property}>VALOR:</Text>
      <Text style={styles.value}>R$ 120,00</Text>

      <TouchableOpacity
        style={styles.infoButton}
        onPress={navigateToInfo}
      >
        <Text style={styles.infoButtonText}>Ver mais detalhes</Text>
        <Feather
          name="arrow-right"
          size={16}
          color="#E02041"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Incident;
