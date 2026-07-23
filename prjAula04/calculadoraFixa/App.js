import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {


    const [totalSoma, setTotalSoma] = useState(0);

    const somar = ()=> {
      const a = 9;
      const b =8;
      const totalSom = a+b;

      setTotalSoma(totalSom)
    }

    const [totalSubstrair, setTotalSubtrair] = useState(0);

    const subtrair = ()=> {
      const a = 9;
      const b = 8;
      const totalSub = a-b;

      setTotalSubtrair(totalSub)
    }
    const [totalMultiplicacao, setTotalMultiplicacao] = useState(0);

    const multiplicar = ()=> {
      const a = 9;
      const b = 8;
      const totalMulti = a*b;

      setTotalMultiplicacao(totalMulti )
    }
    const [totalDivisao, setTotalDivisao] = useState(0);
    
    const divisao = ()=> {
      const a = 9;
      const b = 8;
      const totalDiv = a/b;

      setTotalDivisao(totalDiv)
    }

    

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha uma das opcões abaixo:</Text>

    <View>
      <Text style={styles.resultado}>{totalSoma}</Text>
      <Text style={styles.resultado}>{totalSubstrair}</Text>
      <Text style={styles.resultado}>{totalMultiplicacao}</Text>
      <Text style={styles.resultado}>{totalDivisao}</Text>
    </View>

    <TouchableOpacity 
      style={[styles.botao, styles.botaoTexto]}
      onPress={somar}
    >
      Somar</TouchableOpacity>
      
    <TouchableOpacity
      style={[styles.botao, styles.botaoTexto]}
      onPress={subtrair}
   >
      Subtrair</TouchableOpacity>

    <TouchableOpacity
      style={[styles.botao, styles.botaoTexto]}
      onPress={multiplicar}
    >
      Mulplicar</TouchableOpacity>

    <TouchableOpacity
      style={[styles.botao, styles.botaoTexto]}
      onPress={divisao}
   >
      Dividir</TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    marginBottom: 50,
  },

  resultado: {
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#333',
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },

  botaoTexto: {
    color: 'white',
  }
});