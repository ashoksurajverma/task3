## Container Component

### QuestionList

Ok now we'll tie everything altogether by creating a few more components. We'll want to create a `QuestionList` component which expects a list of `questions` in its `props`. Will look something like this:

```javascript
{
  questions: [
    {
      question:
        "What is the average the airspeed velocity of a (European) unladen swallow?",
      answer: "11 meters per second",
    },
    {
      /* more questions... */
    },
  ];
}
```

### QuestionContainer

Each of these `question`s should be rendered in a `QuestionContainer` component. This component expects a `question` and an `answer` in its `props`, something like this:

```javascript
{
	question: 'What are the first 10 digits of PI?',
	answer: '3.141592653'
}
```

The `QuestionContainer` should contain at most four children:

- The `question` display, which is an element with the class 'question' that displays the particular `question`
- The 'Show Answer' button which should render the confirmation when pressed. It will have the class `btn btn-primary show-answer`
- The `Confirmation` component should only be rendered after 'Show Answer' is pressed and it should ask the user if they want to reveal the answer.
- The `answer` display, which should simply display the answer if the user confirms the `Confirmation` component

You may divide these down into subcomponents as necessary. Here is the expected HTML output for the `QuestionContainer` element throughout the interaction states:

#### Before Show Answer is Clicked

```html
<div class="container">
  <p class="question">What are the first 10 digits of PI?</p>
  <div class="btn btn-primary show-answer">Show Answer</div>
</div>
```

#### After Show Answer is Clicked

```html
<div class="container">
  <div class="alert alert-info">
    <p>Reveal the answer?</p>
    <div class="btn-primary">Yes Please</div>
    <div class="btn-danger">Not Yet</div>
  </div>
  <p class="question">What are the first 10 digits of PI?</p>
  <div class="btn btn-primary show-answer">Show Answer</div>
</div>
```

#### If the Confirmation is Accepted

```html
<div class="container">
  <p class="question">What are the first 10 digits of PI?</p>
  <div class="btn btn-primary show-answer" disabled>Show Answer</div>
  <p class="answer">3.141592653</p>
</div>
```

Please note the `disabled` attribute on the `btn btn-primary`

#### If the Confirmation is Declined (back to initial state)

```html
<div class="container">
  <p class="question">What are the first 10 digits of PI?</p>
  <div class="btn btn-primary show-answer">Show Answer</div>
</div>
```

> **_NOTE :_** This is a class based implementation but you can implement it using functional components.
