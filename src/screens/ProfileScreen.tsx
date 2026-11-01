import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.muted}>user@email.com</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Dark mode</Text>
        <Text style={styles.muted}>Off</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Units</Text>
        <Text style={styles.muted}>kg</Text>
      </View>

      <Pressable style={styles.logout}>
        <Text style={styles.logoutText}>Log out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold' },
  muted: { color: '#5B6475' },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#E6EEF7',
  },
  label: { fontSize: 16, fontWeight: 'bold' },
  logout: { padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#B3261E' },
  logoutText: { color: '#B3261E', textAlign: 'center', fontWeight: 'bold' },
});
