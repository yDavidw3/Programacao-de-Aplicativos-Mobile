import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.tituloPrincipal}>Top 10 Linguagens Mobile</Text>

      {/* 1. JavaScript */}
      <View style={styles.item}>
        <Text style={styles.titulo}>1. JavaScript</Text>
        <MaterialCommunityIcons name="language-javascript" size={80} color="#F7DF1E" style={styles.icon} />
        <Text style={styles.text}>Muito usada com React Native para fazer apps Android e iOS ao mesmo tempo.</Text>
      </View>

      {/* 2. Kotlin */}
      <View style={styles.item}>
        <Text style={styles.titulo}>2. Kotlin</Text>
        <MaterialCommunityIcons name="language-kotlin" size={80} color="#7F52FF" style={styles.icon} />
        <Text style={styles.text}>A linguagem oficial para criar apps nativos no Android.</Text>
      </View>

      {/* 3. Swift */}
      <View style={styles.item}>
        <Text style={styles.titulo}>3. Swift</Text>
        <MaterialCommunityIcons name="language-swift" size={80} color="#F05138" style={styles.icon} />
        <Text style={styles.text}>A linguagem principal para criar apps para iPhone (iOS).</Text>
      </View>

      {/* 4. Dart */}
      <View style={styles.item}>
        <Text style={styles.titulo}>4. Dart</Text>
        <MaterialCommunityIcons name="dartboard" size={80} color="#0175C2" style={styles.icon} />
        <Text style={styles.text}>Usada com o Flutter para criar interfaces bonitas rapidamente.</Text>
      </View>

      {/* 5. Java */}
      <View style={styles.item}>
        <Text style={styles.titulo}>5. Java</Text>
        <FontAwesome5 name="java" size={80} color="#007396" style={styles.icon} />
        <Text style={styles.text}>A veterana do Android, ainda muito usada em apps grandes.</Text>
      </View>

      {/* 6. C# */}
      <View style={styles.item}>
        <Text style={styles.titulo}>6. C#</Text>
        <MaterialCommunityIcons name="language-csharp" size={80} color="#239120" style={styles.icon} />
        <Text style={styles.text}>Usada com Xamarin para criar apps que rodam em várias plataformas.</Text>
      </View>

      {/* 7. TypeScript */}
      <View style={styles.item}>
        <Text style={styles.titulo}>7. TypeScript</Text>
        <MaterialCommunityIcons name="language-typescript" size={80} color="#3178C6" style={styles.icon} />
        <Text style={styles.text}>Uma versão "melhorada" do JavaScript que ajuda a evitar erros.</Text>
      </View>

      {/* 8. PHP */}
      <View style={styles.item}>
        <Text style={styles.titulo}>8. PHP</Text>
        <MaterialCommunityIcons name="language-php" size={80} color="#777BB4" style={styles.icon} />
        <Text style={styles.text}>Muito usada no "fundo" (backend) dos apps para lidar com dados.</Text>
      </View>

      {/* 9. Python */}
      <View style={styles.item}>
        <Text style={styles.titulo}>9. Python</Text>
        <FontAwesome5 name="python" size={80} color="#3776AB" style={styles.icon} />
        <Text style={styles.text}>Usada em IA e também para estruturar o servidor dos aplicativos.</Text>
      </View>

      {/* 10. Objective-C */}
      <View style={styles.item}>
        <MaterialCommunityIcons name="apple" size={80} color="#555" style={styles.icon} />
        <Text style={styles.titulo}>10. Objective-C</Text>
        <Text style={styles.text}>Linguagem antiga da Apple, ainda presente em muitos apps de iPhone.</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f3',
    padding: 20,
  },
  tituloPrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  titulo: {
    color: '#0000FF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  icon: {
    marginBottom: 15,
  },
  text: {
    color: '#444',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  }
});
