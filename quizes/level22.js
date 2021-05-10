let level22 = {
    title: "Урок 22: Таблица умножения на 4",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i <= 12; i++) {
            var tmp = [];
            tmp.push(i.toString());
            tmp.push('x');
            tmp.push('4');
            tmp.push('=');
            var s = i * 4;
            tmp.push('_' + s.toString());
            all.push(tmp);
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level22.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 12);
        return selected;
    }
}
