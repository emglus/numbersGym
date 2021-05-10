let level26 = {
    title: "Урок 26: Таблица умножения на 8",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i <= 12; i++) {
            var tmp = [];
            tmp.push(i.toString());
            tmp.push('x');
            tmp.push('8');
            tmp.push('=');
            var s = i * 8;
            tmp.push('_' + s.toString());
            all.push(tmp);
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level26.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 12);
        return selected;
    }
}
