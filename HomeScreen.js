export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Tela Principal</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Ir para a tela de login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  