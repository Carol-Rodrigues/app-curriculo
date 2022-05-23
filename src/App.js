import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './components/Card';

import foto from './assets/perfil.jpeg';

const App = () => {

  function handleRedeSocial(rede_social) {
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://www.linkedin.com/in/carolina-arangues/')
      break;
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/Carol-Rodrigues')
      break;
      case 'instagram':
        Alert.alert('Meu Instagram', 'https://www.instagram.com/carol.r.arangues/')
      break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>CAROLINA RODRIGUES ARANGUES</Text>
          <Text style={style.funcao}>Desenvolvedora Full Stack Jr.</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
              <Icon name="instagram" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Acadêmica">
          <Text style={style.card_text}>42 São Paulo</Text>
          <Text style={style.card_text}>SoulCode Academy</Text>
        </Card>
        <Card titulo="Conhecimento Técnico">
          <Text style={style.card_text}>Front-end</Text>
          <Text style={style.card_text}>Back-end</Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
  },
  card_text: {
    color: '#939393',
  },
})

export default App;
