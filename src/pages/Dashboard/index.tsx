import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
// @ts-ignore
import logoImg from '../../assets/logo.png';
import Incident from './Incident';
import styles from './styles';

const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        data={[1, 2, 3, 4]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View>
            <Incident />
            <Incident />
            <Incident />
            <Incident />
          </View>
        )}
      />
    </View>
  );
};

export default Dashboard;
