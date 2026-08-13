type QuestionProp = {
  question: string
}

const Question = ({question}: QuestionProp) => {
  return (
    <p data-testid="question">{question}</p>
  )
}

export default Question