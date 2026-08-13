# Jest Testing - The Jason Mraz Quiz

This is a quiz application about Jason Mraz. Users enter their name to start the quiz, answer a few multiple choice questions, and receive a final score. At the end of the quiz, the user can also restart the quiz. The main purpose of this project is to practice writing tests in Jest.

### Features

- Name input before starting
- Five multiple choice questions with three possible answers each
- A progress indicator showing which question the user is answering
- Score tracking that is displayed at the end of the quiz
- Different messages based on the score and username
- Option to play again

### Functionality

On page load, the user will see the title, instructions, and an input box. There is no start button.   
<p align="center">
  <img src="./public/001.png" alt="001" width="600">
</p>

After the user starts typing, the start button will appear and the user can click Start to start the quiz.
<p align="center">
  <img src="./public/002.png" alt="002" width="600">
</p>

After clicking Start, the user will see the first question with three answer options.
<p align="center">
  <img src="./public/003.png" alt="003" width="600">
</p>

After clicking an answer, the user will be taken to the next question. The progress indicator will also update to show which question the user is answering.
<p align="center">
  <img src="./public/004.png" alt="004" width="600">
</p>

There are currently a total of five questions. After answering the last question, the user will be taken to the results screen. They will see their final score, a message based on their score (0-2 / 3-4 / 5) along with their username. There is also a Play Again button that will take the user back to the first question.
<p align="center">
  <img src="./public/005.png" alt="005" width="600">
</p>

