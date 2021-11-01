import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList  } from 'react-native';

export default function App() {
  
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  
  
  const buttonPressed = () => {
    setData([...data, {key: text}]);
    setText('');
  }
  

  const clear = () => {
    setData('');
    setText('');
  }


  return (
    <View style={styles.container}>

      <TextInput style={styles.input} 
      onChangeText={text => setText(text)} 
      value={text}/>

      <View style={{ flexDirection:"row" }}>
      <Button onPress={buttonPressed} title="Add" />
      <Button onPress={clear} title="Clear" />
      </View>
  
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
        <Text>{item.key}</Text> 

        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  
});