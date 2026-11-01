import WorkoutCard from '@/components/WorkoutCard';
import { workouts } from '@/data/workouts';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      
      <Text style={styles.count}>{workouts.length} workouts</Text>
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  count: { fontSize: 16, color: '#5B6475' },
});
