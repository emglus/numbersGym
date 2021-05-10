let level20 = {
    title: "Урок 20: Таблица умножения на 2",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i <= 12; i++) {
            var tmp = [];
            tmp.push(i.toString());
            tmp.push('x');
            tmp.push('2');
            tmp.push('=');
            var s = i * 2;
            tmp.push('_' + s.toString());
            all.push(tmp);
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level20.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 12);
        return selected;
    }
}
