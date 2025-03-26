/*
Task 1: Student Grade System (Objects, Functions, Loops)
Create an object called student with the following properties:

name (a string),
scores (an array of numbers representing the scores of the student in different subjects).

Write a function calculateAverage that takes an array of scores and returns the average score.

Write a function assignGrade that takes an average score and returns a grade based on the following scale:

90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
Below 60: "F"

Write a function displayStudentInfo that:
Uses the calculateAverage and assignGrade functions to compute the average score and grade.

Prints a message like: "Student Name: Alice | Average Score: 85 | Grade: B"
Test your code with a student object.
*/

class Student {
    
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
        this.avarageScore = 0;
    }
    
    calculateAverage(){
        
        let sum = 0;

        for(let i = 0; i < this.scores.length; i++){
            sum += this.scores[i]
        }

        this.avarageScore = sum / this.scores.length

        return this.avarageScore;
    }

    assignGrade() {
        let assignGrade;

        if(this.avarageScore <= 100 && this.avarageScore >= 90){
            assignGrade = "A"
        } else if (this.avarageScore < 89 && this.avarageScore > 80) {
            assignGrade = "B"
        } else if (this.avarageScore < 79 && this.avarageScore > 70) {
            assignGrade = "C"
        } else if (this.avarageScore < 69 && this.avarageScore > 60) {
            assignGrade = "D"
        } else {
            assignGrade = "F"
        }

        return assignGrade
    }

    printInfo() {
        console.log(`Student Name: ${this.name} | Average Score: ${this.calculateAverage()} | Grade: ${this.assignGrade()}`)
    }
}

// Test with a student object
let student1 = new Student();
student1.name = 'Mark S.'; 
student1.scores = [100, 80, 30, 21, 70];

student1.printInfo();