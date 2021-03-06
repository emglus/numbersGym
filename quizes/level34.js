let level34 = {
    title: "Урок 34: Умножение чисел до 200",
    timePerProblem: 5,
    inputwidth: 60,

    getAllProblems: function() {
        var all = [];
        for (var i = 2; i <= 100; i++) {
            for (var j = 2; j <= (200 / i); j++) {
                var tmp = [];
                tmp.push(i.toString());
                tmp.push('x');
                tmp.push(j.toString());
                tmp.push('=');
                var s = i * j;
                tmp.push('_' + s.toString());
                all.push(tmp);
            }
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level34.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}
