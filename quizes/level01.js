
let level01 = {
    title: "Урок 1: Числа и цифры",
    timePerProblem: 3,
    getAllProblems: function () {
        var all = [];
        var numbers = ["ноль","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять"];
    
        for (let i = 1; i < numbers.length; i++) {
            let tmp = [];
            tmp.push(numbers[i]);
            tmp.push('=');
            tmp.push('_' + i.toString());
            all.push(tmp); 
        }
        return all;
    },
    getProblemsToSolve: function () {
        var all = level01.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 10);
        return selected;
    }
}

