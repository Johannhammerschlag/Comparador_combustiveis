import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LoginScreen from './LoginScreen'; // Importe o componente de tela de login

export default function HomeScreen({ navigation }) {
  const [combustivelSelecionado, setCombustivelSelecionado] = useState('');
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const [resultados, setResultados] = useState({});
  const [kmPorLitroGasolina, setKmPorLitroGasolina] = useState('');
  const [kmPorLitroAlcool, setKmPorLitroAlcool] = useState('');
  const [kmPorLitroGNV, setKmPorLitroGNV] = useState('');
  const [kmPorLitroDiesel, setKmPorLitroDiesel] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGNV, setPrecoGNV] = useState('');
  const [precoDiesel, setPrecoDiesel] = useState('');

  const calcularPreco = () => {
    // Certifique-se de que todos os campos necessários estejam preenchidos
    if (
      kmPorLitroGasolina &&
      kmPorLitroAlcool &&
      kmPorLitroGNV &&
      kmPorLitroDiesel &&
      precoGasolina &&
      precoAlcool &&
      precoDiesel &&
      precoGNV
    ) {
      // Converta os valores dos campos para números
      const kmGasolina = parseFloat(kmPorLitroGasolina);
      const kmAlcool = parseFloat(kmPorLitroAlcool);
      const kmGNV = parseFloat(kmPorLitroGNV);
      const kmDiesel = parseFloat(kmPorLitroDiesel);

      const precoGasolinaNum = parseFloat(precoGasolina);
      const precoAlcoolNum = parseFloat(precoAlcool);
      const precoGNVNum = parseFloat(precoGNV);
      const precoDieselNum = parseFloat(precoDiesel);

      // Calcule o custo por quilômetro para cada tipo de combustível
      const custoGasolina = precoGasolinaNum / kmGasolina;
      const custoAlcool = precoAlcoolNum / kmAlcool;
      const custoGNV = precoGNVNum / kmGNV;
      const custoDiesel = precoDieselNum / kmDiesel;

      // Encontre o combustível mais econômico
      const melhoresOpcoes = [
        { combustivel: 'Gasolina', custo: custoGasolina },
        { combustivel: 'Álcool', custo: custoAlcool },
        { combustivel: 'GNV', custo: custoGNV },
        { combustivel: 'Diesel', custo: custoDiesel },
      ];

      // Encontre o menor custo entre todas as opções
      const menorCusto = Math.min(custoGasolina, custoAlcool, custoGNV, custoDiesel);

      // Filtra as opções com menor custo
      const opcoesComMenorCusto = melhoresOpcoes.filter(opcao => opcao.custo === menorCusto);

      // Mapeia o resultado final para exibir o combustível mais econômico
      const resultadoFinal = opcoesComMenorCusto.map(opcao => opcao.combustivel).join(', ');

      setResultados({ melhorCombustivel: resultadoFinal });
    } else {
      // Se algum campo estiver vazio, exiba uma mensagem de erro ou trate-o de acordo com a sua lógica de negócios
      setResultados({ erro: 'Preencha todos os campos obrigatórios.' });
    }
  };

  const mostrarOpcoesCombustivel = () => {
    setMostrarOpcoes(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Selecione os combustíveis:</Text>
      {mostrarOpcoes && (
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, combustivelSelecionado === 'gasolina' ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }]}
            onPress={() => setCombustivelSelecionado("gasolina")}
          >
            <Text style={styles.buttonText}>Gasolina</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, combustivelSelecionado === 'alcool' ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }]}
            onPress={() => setCombustivelSelecionado("alcool")}
          >
            <Text style={styles.buttonText}>Álcool</Text>
          </TouchableOpacity>
        </View>
      )}

      {mostrarOpcoes && (
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, combustivelSelecionado === 'gnv' ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }]}
            onPress={() => setCombustivelSelecionado("gnv")}
          >
            <Text style={styles.buttonText}>GNV</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, combustivelSelecionado === 'diesel' ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }]}
            onPress={() => setCombustivelSelecionado("diesel")}
          >
            <Text style={styles.buttonText}>Diesel</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text>KM por Litro de Gasolina:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: 'darkgreen', color: 'white' }]}
        onChangeText={(text) => setKmPorLitroGasolina(text)}
        value={kmPorLitroGasolina}
        keyboardType="numeric"
      />

      <Text>KM por Litro de Álcool:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: 'darkgreen', color: 'white' }]}
        onChangeText={(text) => setKmPorLitroAlcool(text)}
        value={kmPorLitroAlcool}
        keyboardType="numeric"
      />

      <Text>KM por Litro de GNV:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: 'darkgreen', color: 'white' }]}
        onChangeText={(text) => setKmPorLitroGNV(text)}
        value={kmPorLitroGNV}
        keyboardType="numeric"
      />

      <Text>KM por Litro de Diesel:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: 'darkgreen', color: 'white' }]}
        onChangeText={(text) => setKmPorLitroDiesel(text)}
        value={kmPorLitroDiesel}
        keyboardType="numeric"
      />

      <Text>Preço da Gasolina:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: 'darkgreen', color: 'white' }]}
        onChangeText={(text) => setPrecoGasolina(text)}
        value={precoGasolina}
        keyboardType="numeric"
      />

      <Text>Preço do Álcool:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: 'darkgreen', color: 'white' }]}
        onChangeText={(text) => setPrecoAlcool(text)}
        value={precoAlcool}
        keyboardType="numeric"
      />

      <Text>Preço do GNV (por metro cúbico):</Text>
      <TextInput
        style={[styles.input, { backgroundColor: 'darkgreen', color: 'white' }]}
        onChangeText={(text) => setPrecoGNV(text)}
        value={precoGNV}
        keyboardType="numeric"
      />

      <Text>Preço do Diesel:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: 'darkgreen', color: 'white' }]}
        onChangeText={(text) => setPrecoDiesel(text)}
        value={precoDiesel}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={calcularPreco}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultados.melhorCombustivel && (
        <Text>O combustível mais econômico é...: {resultados.melhorCombustivel}</Text>
      )}

      {resultados.erro && (
        <Text style={styles.errorText}>{resultados.erro}</Text>
      )}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
    backgroundColor: 'darkgreen',
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
