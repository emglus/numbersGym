let level24 = {
    title: "Урок 24: Таблица умножения на 6",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i <= 12; i++) {
            var tmp = [];
            tmp.push(i.toString());
            tmp.push('x');
            tmp.push('6');
            tmp.push('=');
            var s = i * 6;
            tmp.push('_' + s.toString());
            all.push(tmp);
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level24.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 12);
        return selected;
    }
}
