"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import Header from "@/components/Header";
import Question from "@/components/Question";
import Answers from "@/components/Answers";
import Progress from "@/components/Progress";
import Results from "@/components/Results";
import StartScreen from "@/components/StartScreen";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const handleStart = (username: string) => {
    setUsername(username);
    setHasStarted(true);
  };

  const currentQuestion = questions[questionIndex];

  const handleAnswer = (index: number) => {
    setQuestionIndex(questionIndex + 1);
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    if (questionIndex === questions.length - 1) {
      setGameOver(true);
      return;
    }
  };

  const handleReset = () => {
    setScore(0);
    setQuestionIndex(0);
    setGameOver(false);
  };

  return (
    <div className='flex flex-col mx-4 my-32 md:w-3xl md:mx-auto md:mt-48'>
      <Header />
      {!hasStarted && <StartScreen handleStart={handleStart} />}
      {!gameOver && hasStarted && (
        <>
          <Progress questionIndex={questionIndex} totalQuestions={questions.length} />
          <Question question={currentQuestion.question} />
          <Answers answers={currentQuestion.answers} handleAnswer={handleAnswer} />
        </>
      )}
      {gameOver && hasStarted && (
        <>
          <Results handleReset={handleReset} score={score} totalQuestions={questions.length} username={username} />
        </>
      )}
    </div>
  );
}
