let level25 = {
    title: "Урок 25: Таблица умножения на 7",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i <= 12; i++) {
            var tmp = [];
            tmp.push(i.toString());
            tmp.push('x');
            tmp.push('7');
            tmp.push('=');
            var s = i * 7;
            tmp.push('_' + s.toString());
            all.push(tmp);
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level25.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 12);
        return selected;
    }
}
