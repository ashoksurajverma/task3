import React, { useState } from "react";
import Confirmation from "./Confirmation";

interface IQuestion {
  question: string;
  answer: string;
}
function QuestionContainer({ question, answer }: IQuestion) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const accept = () => {
    console.log("User accept anotification");
    setShowAnswer(true);
  };

  const decline = () => {
    console.log("User decline anotification");
    setShowConfirmation(false);
  };

  const onHandleShowAns = () => {
    console.log(showAnswer);
    if (showAnswer && showConfirmation) return;
    if (showAnswer) {
      setShowAnswer(false);
    }
    setShowConfirmation(!showConfirmation);
  };

  return (
    <div className="container">
      {showConfirmation && (
        <Confirmation
          accept={accept}
          decline={decline}
          message="Reveal the answer?"
          type="message"
          acceptLabel="Yes Please"
          declineLabel="Not Yet"
        />
      )}
      <div className="question">{question}</div>
      <div
        className={`btn btn-primary show-answer ${
          showAnswer && showConfirmation ? "disabled" : ""
        }`}
        onClick={onHandleShowAns}
      >
        Show Answer
      </div>
      {showAnswer && (
        <div className="answer">
          <span className="answer-label">Ans: </span>
          {answer}
        </div>
      )}
    </div>
  );
}

export default QuestionContainer;
