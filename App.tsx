import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Lontra Final de Semestre</Text>
      <Image source={require('./assets/LontraPedindoUmPonto.jpg')} style={styles.image}/>
      <StatusBar backgroundColor="#bebebe" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 250,
    height: 350,
  },
  texto:{
    fontSize:20,
    color: '#fff',
    backgroundColor: '#bebebe',
    margin: 10,
    paddingLeft: 12,
    paddingRight: 12
  },
  statusbar:{
    backgroundColor:'#bebebe'
  }
});

