import type { Workout } from '@/types';
import { ScrollView, StyleSheet, Text } from 'react-native';

type WorkoutDetailsProps = {
  workout: Workout;
};

export default function WorkoutDetails({ workout }: WorkoutDetailsProps) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>{workout.name}</Text>
      <Text>Muscle: {workout.muscle}</Text>
      <Text>Sets: {workout.sets}</Text>
      <Text>Reps: {workout.reps}</Text>
      <Text>Weight: {workout.weightKg} kg</Text>
      <Text>Date: {workout.date}</Text>
      
      {workout.notes ? <Text>Notes: {workout.notes}</Text> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 8 },
  title: { fontSize: 24, fontWeight: 'bold' },
});
