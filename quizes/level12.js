let level12 = {
    title: "Урок 12: Сложение чисел от 1 до 20",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i < 20; i++) {
            for (var j = 1; j < 20; j++) {
                if (i + j <= 20) {
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
        var all = level12.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}
