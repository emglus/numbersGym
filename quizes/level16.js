let level16 = {
    title: "Урок 16: Сложение чисел от 1 до 100",
    timePerProblem: 5,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i < 100; i++) {
            for (var j = 1; j < 100; j++) {
                if (i + j <= 100) {
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

    // specific
    getProblemsToSolve: function() {
        var all = level16.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}
