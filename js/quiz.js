//import {level01} from './quizes/level01.js';
//import {level02} from './quizes/level02.js';

function getQuizByLevelNumber(levelNum) {
    let quiz = {
        title: "",
        timePerProblem: 3,
        getAllProblems: function () {
        },
        getProblemsToSolve: function () {
        }
    }

    switch (levelNum) {
        case 1:
            quiz.title = level01.title;
            quiz.timePerProblem = level01.timePerProblem;
            quiz.getProblemsToSolve = level01.getProblemsToSolve;
            break;
        case 2:
            quiz.title = level02.title;
            quiz.timePerProblem = level02.timePerProblem;
            quiz.getProblemsToSolve = level02.getProblemsToSolve;
            break;
        case 3:
            quiz.title = level03.title;
            quiz.timePerProblem = level03.timePerProblem;
            quiz.getProblemsToSolve = level03.getProblemsToSolve;
            break;
        case 4:
            quiz.title = level04.title;
            quiz.timePerProblem = level04.timePerProblem;
            quiz.getProblemsToSolve = level04.getProblemsToSolve;
            break;
        case 5:
            quiz.title = level05.title;
            quiz.timePerProblem = level05.timePerProblem;
            quiz.getProblemsToSolve = level05.getProblemsToSolve;
            break;
        case 6:
            quiz.title = level06.title;
            quiz.timePerProblem = level06.timePerProblem;
            quiz.getProblemsToSolve = level06.getProblemsToSolve;
            break;
        case 7:
            quiz.title = level07.title;
            quiz.timePerProblem = level07.timePerProblem;
            quiz.getProblemsToSolve = level07.getProblemsToSolve;
            break;
        case 8:
            quiz.title = level08.title;
            quiz.timePerProblem = level08.timePerProblem;
            quiz.getProblemsToSolve = level08.getProblemsToSolve;
            break;
        case 9:
            quiz.title = level09.title;
            quiz.timePerProblem = level09.timePerProblem;
            quiz.getProblemsToSolve = level09.getProblemsToSolve;
            break;
        case 10:
            quiz.title = level10.title;
            quiz.timePerProblem = level10.timePerProblem;
            quiz.getProblemsToSolve = level10.getProblemsToSolve;
            break;
        case 11:
            quiz.title = level11.title;
            quiz.timePerProblem = level11.timePerProblem;
            quiz.getProblemsToSolve = level11.getProblemsToSolve;
            break;
        default:
            break;                        
    }

    return quiz;
}