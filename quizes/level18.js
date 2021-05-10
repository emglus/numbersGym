let level18 = {
    title: "Урок 18: Вычитание чисел от 1 до 100",
    timePerProblem: 5,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i < 100; i++) {
            for (var j = 1; j < 100; j++) {
                if (i + j <= 100) {
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
        var all = level18.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}
