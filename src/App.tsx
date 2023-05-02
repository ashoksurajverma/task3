import React, { useState } from "react";
import QuestionList from "./QuestionList";
import "./app.css";

function App() {
  const [questions, setQuestions] = useState([
    {
      question:
        "What is the average the airspeed velocity of a (European) unladen swallow?",
      answer: "11 meters per second",
    },
    {
      question:
        "What is the average the airspeed velocity of a (European) unladen swallow?",
      answer: "11 meters per second",
    },
    {
      question:
        "What is the average the airspeed velocity of a (European) unladen swallow?",
      answer: "11 meters per second",
    },
    {
      question:
        "What is the average the airspeed velocity of a (European) unladen swallow?",
      answer: "11 meters per second",
    },
    {
      question:
        "What is the average the airspeed velocity of a (European) unladen swallow?",
      answer: "11 meters per second",
    },
    {
      question:
        "What is the average the airspeed velocity of a (European) unladen swallow?",
      answer: "11 meters per second",
    },
  ]);

  return (
    <div id="app">
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
