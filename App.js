import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ContadorDePalavras from './components/contadorPalavras';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContadorDePalavras />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1780eb'
  },
  
});

export default App;