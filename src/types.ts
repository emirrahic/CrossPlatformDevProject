
export type Muscle = 'chest' | 'back' | 'legs' | 'shoulders' | 'arms';


export type Workout = {
  id: string;
  name: string;
  muscle: Muscle;
  sets: number;
  reps: number;
  weightKg: number;
  date: string; 
  notes?: string; 
};
