export type Question = {
  question: string,
  answers: [string, string, string],
  correctAnswer: 0 | 1 | 2;
}