let level10 = {
    title: "Урок 10: Вычитание чисел от 1 до 10",
    timePerProblem: 3,
    getAllProblems: function () {
        var all = [];
        for (var i = 1; i < 10; i++) {
            for (var j = 1; j < 10; j++) {
                if (i + j <= 10) {
                    var s = i + j;
                    var tmp = [];
                    tmp.push(s.toString());
                    tmp.push('-');
                    tmp.push(i.toString());
                    tmp.push('=');
                    tmp.push('_' + j.toString());
                    all.push(tmp);
                }
            }
        }
        return all;
    },
    getProblemsToSolve: function () {
        var all = level10.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}

