import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { contadorVogais } from '../utils/contadorVogais';

const PalavraCounter = () => {
  const [word, setWord] = useState('');
  const [vogalCount, setVogalCount] = useState(0);

  const handleCountVogais = () => {
    const count = contadorVogais(word);
    setVogalCount(count);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{`CONTADOR DE VOGAIS`}</Text>
      <TextInput
        placeholder="Digite uma palavra"
        value={word}
        onChangeText={setWord}
        style={styles.input}
      />
      <Button title="Contar Vogais" onPress={handleCountVogais} />
      <Text style={styles.resultado}>{`A palavra possui ${vogalCount} vogais.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1780eb'
  },
  input: {
    fontSize: 20,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#dde6f0'
  },
  resultado: {
    fontSize: 22,
    marginTop: 20,
    color:'#fff'
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color:'#fff'
  },
});

export default PalavraCounter;
