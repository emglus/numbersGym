let level02 = {
    title: "Урок 2: Сложение чисел от 1 до 6",
    timePerProblem: 3,
    getAllProblems: function () {
        var all = [];
        for (var i = 1; i < 6; i++) {
            for (var j = 1; j < 6; j++) {
                if (i + j <= 6) {
                    var tmp = [];
                    tmp.push(i.toString());
                    tmp.push('+');
                    tmp.push(j.toString());
                    tmp.push('=');
                    var s = i + j;
                    tmp.push('_' + s.toString());
                    all.push(tmp);
                }
            }
        }
        return all;
        },
    getProblemsToSolve: function () {
        var all = level02.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}

