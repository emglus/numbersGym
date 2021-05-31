let level32 = {
    title: "Урок 32: Деление чисел от 1 до 144",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        for (var i = 2; i <= 12; i++) {
            for (var j = 2; j <= 12; j++) {
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
        var all = level32.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}
