let level03 = {
    title: "Урок 3: Сложение чисел от 1 до 8",
    timePerProblem: 3,
    getAllProblems: function () {
        var all = [];
        for (var i = 1; i < 8; i++) {
            for (var j = 1; j < 8; j++) {
                if (i + j <= 8) {
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
        var all = level03.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}

