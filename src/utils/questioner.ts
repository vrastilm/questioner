import data from '../data/questions'

const getRandomQuestion = function () {
    const randomSubject = getRandomInt(data.exam.length)
    const randomQuestion = getRandomInt(data.exam[randomSubject].questions.length)
    return [data.exam[randomSubject].theme, data.exam[randomSubject].subject, data.exam[randomSubject].questions[randomQuestion]]
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max))
  }

export {getRandomQuestion}