let level14 = {
    title: "Урок 14: Вычитание чисел от 1 до 20",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i < 20; i++) {
            for (var j = 1; j < 20; j++) {
                if (i + j <= 20) {
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

    // specific
    getProblemsToSolve: function() {
        var all = level14.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}
