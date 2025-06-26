export interface Experiment {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  isAvailable: boolean;
  path: string;
  thumbnail?: string;
  tags: string[];
}
