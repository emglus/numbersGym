let level04 = {
    title: "Урок 4: Сложение чисел от 1 до 10",
    timePerProblem: 4,
    getAllProblems: function () {
        var all = [];
        for (var i = 1; i < 10; i++) {
            for (var j = 1; j < 10; j++) {
                if (i + j <= 10) {
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
        var all = level04.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}

