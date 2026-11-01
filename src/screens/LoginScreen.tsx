import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export default function LoginScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.logo}>GymLog</Text>
      <Text style={styles.subtitle}>Log every workout. See your progress.</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>

      <Text style={styles.link}>No account yet? Sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, justifyContent: 'center', gap: 12, backgroundColor: 'white' },
  logo: { fontSize: 36, fontWeight: 'bold', textAlign: 'center', color: '#003A6D' },
  subtitle: { textAlign: 'center', color: '#5B6475', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#9AA6B5', borderRadius: 8, padding: 10 },
  button: { padding: 12, borderRadius: 8, backgroundColor: '#003A6D' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  link: { textAlign: 'center', color: '#003A6D' },
});
