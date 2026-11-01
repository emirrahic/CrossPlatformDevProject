import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function AddWorkoutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Add workout</Text>

      <TextInput placeholder="Exercise name (Bench Press)" style={styles.input} />

      <View style={styles.row}>
        <TextInput placeholder="Sets" keyboardType="numeric" style={[styles.input, styles.half]} />
        <TextInput placeholder="Reps" keyboardType="numeric" style={[styles.input, styles.half]} />
      </View>

      <TextInput placeholder="Weight (kg)" keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Notes (optional)" style={styles.input} />

      <View style={styles.photoBox}>
        <Text style={styles.muted}>Add photo</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Save workout</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#9AA6B5', borderRadius: 8, padding: 10 },
  row: { flexDirection: 'row', gap: 8 },
  half: { flex: 1 },
  photoBox: {
    height: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#9AA6B5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  muted: { color: '#5B6475' },
  button: { padding: 12, borderRadius: 8, backgroundColor: '#003A6D' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});
