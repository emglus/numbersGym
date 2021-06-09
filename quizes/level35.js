let level35 = {
    title: "Урок 35: Деление чисел до 200",
    timePerProblem: 6,

    getAllProblems: function() {
        var all = [];
        for (var i = 2; i <= 100; i++) {
            for (var j = 2; j <= (200 / i); j++) {
                var s = i * j;
                var tmp = [];
                tmp.push(s.toString());
                tmp.push('/');
                tmp.push(i.toString());
                tmp.push('=');
                tmp.push('_' + j.toString());
                all.push(tmp);
            }
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level35.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}
