import { useState } from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import api, { loadAuthToken, getImageUrl } from '../../lib/api';
import { global } from '../../styles/global';
import { Contato } from '../../types/Contato';

const defaultProfilePic = require('../../assets/profile-picture.png');

export default function ListaContatos() {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const router = useRouter();
  
  const carregar = async () => {
    try {
      await loadAuthToken();
      const { data } = await api.get('/contatos');
      setContatos(data);
    } catch (err) {
      Alert.alert('Erro', 'Falha ao carregar contatos. Verifique login e API.');
    }
  };

  const excluir = async (id: string) => {
    try {
      await api.delete(`/contatos/${id}`);
      carregar();
    } catch {
      Alert.alert('Erro', 'Não foi possível excluir.');
    }
  };

  useFocusEffect(() => {
    carregar();
  });

  return (
    <View style={global.container}>
      <Text style={global.title}>Seus contatos</Text>
      <Button title="Novo contato" onPress={() => router.push('/contatos/novo')} />
      <FlatList
        data={contatos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          const idDaFoto = item.fotoId || (item as any).fotold;
          const urlFoto = getImageUrl(idDaFoto);

          return (
            <TouchableOpacity 
              style={global.card}
              onPress={() => router.push(`/contatos/${item._id}`)}>

              <View style={global.card_info}>
                <Image 
                  source={urlFoto ? { uri: urlFoto } : defaultProfilePic} 
                  style={{ width: 40, height: 40, marginVertical: 8, borderRadius: 50 }} 
                  resizeMode="cover"
                />
                
                <Text>{item.nome}</Text>
              </View>

              <Button title="Excluir" onPress={() => excluir(item._id)} />

            </TouchableOpacity>
        )}}
      />
    </View>
  );
}