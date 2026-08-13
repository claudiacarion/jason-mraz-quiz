type ProgressProps = {
  questionIndex: number;
  totalQuestions: number;
};

const Progress = ({ questionIndex, totalQuestions }: ProgressProps) => {
  return (
    <h3>
      Question {questionIndex + 1}/{totalQuestions}
    </h3>
  );
};

export default Progress;
