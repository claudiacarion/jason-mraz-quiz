type ResultsProp = {
  handleReset: () => void;
  score: number;
  totalQuestions: number;
  username: string;
};

const Results = ({ handleReset, score, totalQuestions, username }: ResultsProp) => {
  return (
    <div className="flex flex-col">
      <p>
        Game over! Your score is {score}/{totalQuestions}!
      </p>
      {score <= 2 && <p>{username}, that was disappointing.</p>}
      {score > 2 && score < 5 && <p>Not too shabby, {username}.</p>}
      {score >= 5 && <p>Impressive, {username}!</p>}
      <button className="cursor-pointer border border-white rounded-3xl p-4 w-fit my-8 mx-auto" onClick={handleReset}>
        Play again
      </button>
    </div>
  );
};

export default Results;
