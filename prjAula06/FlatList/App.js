import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {styles} from './components/style';
import {DATA}  from './components/data';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App(){  
return(
  <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  </View>
  )  
};
