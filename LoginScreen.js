import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, você pode verificar se o usuário e a senha são válidos
    if (username === 'usuario' && password === 'senha') {
      // Autenticação bem-sucedida, redirecione para a próxima tela
      navigation.navigate('Home'); // Navega para a tela de cálculo (HomeScreen)
    } else {
      // Exiba uma mensagem de erro se a autenticação falhar
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Faça o login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#7FFF00',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
