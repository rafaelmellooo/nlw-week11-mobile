import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import styles from './styles';

const Dashboard: React.FC = () => {
  type IncidentType = {
    id: number;
    title: string;
    description: string;
    value: number;
    ong_id: string;
    name: string;
    email: string,
    whatsapp: string;
    city: string;
    uf: string;
  };

  const [incidents, setIncidents] = useState<IncidentType[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation();

  const loadIncidents = async () => {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    type ResponseType = IncidentType[];

    const response = await api.get<ResponseType>('/incidents', {
      params: {
        page,
      }
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadIncidents();
  });

  const navigateToInfo = (incident: IncidentType) => {
    navigation.navigate('Info', {
      incident,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={({ id }: IncidentType) => String(id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(incident.value)}</Text>

            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => navigateToInfo(incident)}
            >
              <Text style={styles.infoButtonText}>Ver mais detalhes</Text>
              <Feather
                name="arrow-right"
                size={16}
                color="#E02041"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Dashboard;
