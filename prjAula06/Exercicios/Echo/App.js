import { StyleSheet, StatusBar, Text, View, FlatList, TextInput, TouchableOpacity, Image, Touchable } from 'react-native';
import { styles } from './components/style';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { DATA } from './components/data';


<Ionicons name="camera-outline" size={22} color="#787878" />


const Item = ({nomeContato, mensagem, horarioMensagem, fotoPerfil}) => (
  <View style={styles.contato}>

    <View style={styles.molduraFotoPerfil}>
      <Image source={{ uri: fotoPerfil }} style={styles.fotoPerfil} />
    </View>

    <View style={styles.textoContato}>
      <View style={styles.linhaNomeHorario}>
        <Text style={styles.nome}>{nomeContato}</Text>
        <Text style={styles.horario}>{horarioMensagem}</Text>
      </View>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  </View>
)

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>

      <View style={styles.acessoRapido}>
        <View>
          <TouchableOpacity style={styles.botaoMaisOpcoes}>
            <Text style={styles.outrasOpcoes}>. . .</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ladoDireito}>
          <TouchableOpacity>
            <Text>
              <Ionicons style={[styles.tirarFoto]} name="camera-outline" size={17}/>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoAdicionar}>
            <Text style={styles.novo}>+</Text>
          </TouchableOpacity>
        </View>
      </View>



        <Text style={styles.titulo}>Chats</Text>
        <TextInput style={styles.caixaPesquisa} placeholder="⌕   Pergunte para Echo IA ou Pesquise" placeholderTextColor="#00000078" />
        
        <View style={styles.lista}>
          <TouchableOpacity style={[styles.itemLista, styles.primeiroItemLista]}>
            <Text style={styles.primeiroTextoLista}>Todas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemLista}>
            <Text style={styles.textoLista}>Não Lidas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemLista}>
            <Text style={styles.textoLista}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemLista}>
            <Text style={styles.textoLista}>Grupos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemLista}>
            <Text style={styles.textoLista}>+</Text>
          </TouchableOpacity>
        </View>
     </View>

    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Item 
          nomeContato={item.nomeContato} 
          mensagem={item.mensagem} 
          horarioMensagem={item.horarioMensagem} 
          fotoPerfil={item.fotoPerfil} 
        />
      )}
      keyExtractor={item => item.id}
    />

    <View style={styles.footer}>
      <TouchableOpacity style={styles.guiaRapido}>
        <MaterialCommunityIcons name="circle-slice-8" size={24} color="#787878" />
        <Text style={styles.textoGuiaRapido}>Atualizações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.guiaRapido}>
        <Feather name="phone" size={24} color="#787878" />
        <Text style={styles.textoGuiaRapido}>Ligações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.guiaRapido}>
        <MaterialCommunityIcons name="account-group-outline" size={26} color="#787878" />
        <Text style={styles.textoGuiaRapido}>Comunidades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.guiaRapido}>
        <MaterialCommunityIcons name="message-text" size={24} color="#000000" />
        <Text style={styles.textoSelecionadoGuiaRapido}>Conversas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.guiaRapido}>
        <Feather name="settings" size={24} color="#787878" />
        <Text style={styles.textoGuiaRapido}>Configurações</Text>
      </TouchableOpacity>
    </View>
  </View>

  );
}
