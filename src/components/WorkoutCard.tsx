import type { Workout } from '@/types';
import { Pressable, StyleSheet, Text, View } from 'react-native';


type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Pressable
      onPress={() => console.log('Open', workout.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.texts}>
        <Text style={styles.title}>{workout.name}</Text>
        <Text>
          {workout.muscle} · {workout.sets} x {workout.reps} · {workout.weightKg} kg
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 12, overflow: 'hidden', backgroundColor: '#E6EEF7' },
  pressed: { opacity: 0.6 },
  texts: { padding: 12, gap: 4 },
  title: { fontSize: 18, fontWeight: 'bold' },
});
