// Question 1

class Car{
    constructor(make, model, year, isAvailable){
        this.make = make;
        this.model = model;
        this. year = year;
        this.isAvailable = isAvailable;
    }
    toogleAvailability(){
        this.isAvailable = !this.isAvailable
    }
}
const whiteCar = new Car("Note","Nissan", 2016, true);
const greyCar = new Car("Vitz", "Nissan", 2018, false);
console.log(whiteCar);
console.log(greyCar);

whiteCar.toogleAvailability();
console.log(whiteCar);
greyCar.toogleAvailability();
console.log(greyCar);

// b
class rental{
    constructor(car, rentalName, rentalstartDate, rentalEndDate){
        this.car = car;
        this.rentalName = rentalName;
        this.rentalstartDate = rentalstartDate;
        this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration(){
        const startDate = this.rentalstartDate.getTime();
        const endDate = this.rentalEndDate.getTime();
        const duration = Math.abs(endDate-startDate);
        const days = Math.ceil(duration / (1000 * 60 * 60 *24));
        return days
    }
}

const firstCar = new Car("Mazda", "CX5", 2018, true);
const rent = new rental(firstCar, "Nataly Wambui", new Date("2024-08-21"), new Date("2024-02-24"))
console.log(rent);

// Question 2
class Question{
    constructor(text, options, correctAnswer){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userName){
        return userName === this.correctAnswer;
    }
}

const firstQuestion = new Question(
    "Who is the president of Kenya",
    ["Nigeria", "Kampala", "Nairobi", "Kigali"],
    "Nairobi"
);

console.log(firstQuestion.checkAnswer("Nairobi"));
console.log(firstQuestion.checkAnswer("Kampala"));


class Quiz{
    constructor(questions, currentQuestionindex, score){
        this.questions = questions;
        this.currentQuestionindex = currentQuestionindex;
        this.score = score;
    }
    addQuestion(lastQuestion){
        this.lastQuestion = lastQuestion;
        const allQuestions = this.questions.concat(this.lastQuestion);
        console.log({allQuestions});
    }
    nextQuestion(){
        const index = `${this.questions}`
        for (let currentQuestionindex of `${this.questions}`){
            currentQuestionindex+=`$this.questions`
            return currentQuestionindex
        }
    }
    submitAnswer(answer){
        if(`${this.answer}` !== `${this.correctAnswer}`){
            score++;
            return score
        }
        else{
            return "Incorrect"
        }
    }
}







