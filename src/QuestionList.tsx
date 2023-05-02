import React from "react";
import QuestionContainer from "./QuestionContainer";

interface IQuestion {
  question: string;
  answer: string;
}

interface IProps {
  questions: Array<IQuestion>;
}
function QuestionList({ questions }: IProps) {
  return (
    <div className="question-wrapper">
      {questions.map((question: IQuestion, index: number) => {
        return <QuestionContainer {...question} key={index} />;
      })}
    </div>
  );
}

export default QuestionList;
