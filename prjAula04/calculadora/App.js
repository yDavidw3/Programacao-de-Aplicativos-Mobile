import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';

export default function App() {

  const [a, setA] = useState(''); 
  const [b, setB] = useState(''); 

//SOMA ----------------------------------------
    const [totalSoma, setTotalSoma] = useState('');

    const somar = ()=> {

      const totalSom = parseInt(a)+parseInt(b);
      

      setTotalSoma(totalSom)
    }
 //SOMA ----------------------------------------

 //SUBTRAÇÃO ----------------------------------------
    const [totalSubstrair, setTotalSubtrair] = useState('');

    const subtrair = ()=> {

      const totalSub = parseInt(a)-parseInt(b);;

      setTotalSubtrair(totalSub)
    }
//SUBTRAÇÃO ----------------------------------------

 //MULTIPLICAÇÃO----------------------------------------
    const [totalMultiplicacao, setTotalMultiplicacao] = useState('');

    const multiplicar = ()=> {
      const totalMulti = parseInt(a)*parseInt(b);;

      setTotalMultiplicacao(totalMulti )
    }
 //MULTIPLICAÇÃO----------------------------------------
 
  //DIVISÃO----------------------------------------
    const [totalDivisao, setTotalDivisao] = useState('');
    
    const divisao = ()=> {

      const totalDiv = parseInt(a)/parseInt(b);;

      setTotalDivisao(totalDiv)
    }
  //DIVISÃO----------------------------------------

  //Limpar campos ----------------------------------------
  const limparCampos = ()=> {
    setA('');
    setB('');
    setTotalSoma('');
    setTotalSubtrair('');
    setTotalMultiplicacao('');
    setTotalDivisao('');
  }
  //Limpar campos ----------------------------------------

    

  return (
    <ScrollView contentContainerStyle={{ 
      flexGrow: 1, backgroundColor: '#4b3634', alignItems: 'center',
      justifyContent: 'center',
      }}>

    {/*-----------------CALC -----------------------*/}
    <View style={[styles.retanguloResultado, styles.top]}> 
      <Text style={styles.titulo}>Calculadora</Text>
    <TextInput 
    style={styles.TextInput}
    placeholder='Digite o 1º número'
    keyboardType='numeric'
    onChangeText={(a)=> setA(a)} 
    value={a}
    />
     <TextInput 
    style={styles.TextInput}
    placeholder='Digite o 2º número'
    keyboardType='numeric'
    onChangeText={(b)=> setB(b)} 
    value={b}
    />
    <TouchableOpacity style={styles.botao} onPress={somar}> 
      <Text style={styles.botaoTexto}>Somar</Text> 
    </TouchableOpacity>
      

    <TouchableOpacity style={styles.botao} onPress={subtrair}> 
      <Text style={styles.botaoTexto}>Subtrair</Text> 
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.botao} onPress={multiplicar}> 
      <Text style={styles.botaoTexto}>Multiplicar</Text> 
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.botao} onPress={divisao}> 
      <Text style={styles.botaoTexto}>Dividir</Text> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.botao} onPress={limparCampos}> 
      <Text style={styles.botaoTexto}>Limpar</Text> 
    </TouchableOpacity>
    
    <Text style={styles.resultado}>Resultado: {totalSoma}, {totalSubstrair}, {totalMultiplicacao}, {totalDivisao}</Text>

    </View>
    {/*-----------------CALC -----------------------*/}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b3634',
    alignItems: 'center',
    justifyContent: 'center',

  },

  titulo: {
    marginBottom: 20,
    fontSize: 23,
    fontFamily: 'Arial',
    fontWeight: '800',
    color: '#f7ebc9'
  },

  resultado: {
    marginBottom: 5,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 600,
    color: '#f7ebc9',
  },

  botao: {  
    backgroundColor: '#f7ebc9',
    padding: 10,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    marginBottom: 10,
  },

  botaoTexto: {
    color: '#c25c2d',
    fontWeight: 'bold',
  },

  retanguloResultado: {
    display:'flex',
    backgroundColor: '#c25c2d',
    marginBottom: 35,
    padding: 50,
    width: 300,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000f',
    shadowOffset: {width:0, height:10},
    shadowOpacity: 0.3,
    shadowRadius: 10
  },

  top: {
    marginTop: 100,
  },

  espacoBaixo: {
    marginBottom: 50,
  },

  TextInput: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc00',
    color: '#999',
  },

});

