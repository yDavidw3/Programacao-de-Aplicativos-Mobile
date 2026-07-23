import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [resultado, setResultado] = useState('');
  const [image, setImage] = useState(null);

  const testeTriangulo = () => {
    const A = Number(a);
    const B = Number(b);
    const C = Number(c);

    if (A + B > C && A + C > B && C + B > A) {
      if (A == B && B == C) {
        setResultado("Triângulo Equilátero");
        setImage(require('./assets/image/equilatero.png'));
      } else if (A != B && B != C && C != A) {
        setResultado("Triângulo Escaleno");
        setImage(require('./assets/image/escaleno.png'));
      } else {
        setResultado("Triângulo Isósceles");
        setImage(require('./assets/image/isosceles.png'));
      }
    } else {
      setResultado("Não forma um triângulo");
      setImage(null);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Desafio do Triângulo</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>1ª ARESTA</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#4B5E68"
          keyboardType="numeric"
          onChangeText={(val) => setA(val)}
          value={a}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>2ª ARESTA</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#4B5E68"
          keyboardType="numeric"
          onChangeText={(val) => setB(val)}
          value={b}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>3ª ARESTA</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#4B5E68"
          keyboardType="numeric"
          onChangeText={(val) => setC(val)}
          value={c}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={testeTriangulo}>
        <Text style={styles.botaoTexto}>VERIFICAR</Text>
      </TouchableOpacity>

      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}

      {image && (
        <View style={styles.imageCard}>
          <Image source={image} style={styles.img} resizeMode="contain" />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#131F24',
    alignItems: 'center',
    padding: 25,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4B5E68',
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#202F36',
    borderWidth: 2,
    borderColor: '#37464F',
    borderRadius: 15,
    padding: 15,
    fontSize: 18,
    color: '#FFFFFF',
  },
  botao: {
    backgroundColor: '#58CC02',
    width: '100%',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#46A302',
    marginTop: 20,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultado: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#58CC02',
    textAlign: 'center',
  },
  imageCard: {
    marginTop: 30,
    width: '100%',
    height: 250,
    backgroundColor: '#202F36',
    borderWidth: 2,
    borderColor: '#37464F',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});