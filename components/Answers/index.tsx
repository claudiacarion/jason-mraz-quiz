type AnswersProp = {
  answers: string[];
  handleAnswer: (index: number) => void;
};

const Answers = ({ answers, handleAnswer }: AnswersProp) => {
  return (
    <div className='flex w-full justify-center gap-4 md:gap-8 my-8'>
      {answers.map((item, index) => (
        <button data-testid="answer-btn" className="cursor-pointer border border-white rounded-3xl p-4" key={index} onClick={() => handleAnswer(index)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Answers;
