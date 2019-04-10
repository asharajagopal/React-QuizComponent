import React, { Component} from 'react';
import QuizQuestion from './components/QuizQuestion.js';
import QuizEnd from './components/QuizEnd.js';

let quizData = require('./data/quiz_data.json');

class Quiz extends Component{
    state = {quiz_position : 1}
    showNextQuestion(){
        this.setState((state) =>{
            return{quiz_position : state.quiz_position + 1}
        })
    }
    handleResetClick(){
        this.setState({quiz_position : 1})
    }
    render(){
        const isQuizEnd = ((this.state.quiz_position -1) === quizData.quiz_questions.length)
        return(
        <div>
            <div className="quiz-header">
                <h1>Simple Quiz Application</h1>
            </div>
            {isQuizEnd ? <QuizEnd resetClickHandler= {this.handleResetClick.bind(this)}/> :
            <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position -1]} 
            showNextQuestionHandler = {this.showNextQuestion.bind(this)} />}
            
        </div>
        )
            
        
    }
}

export default Quiz;