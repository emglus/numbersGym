let level31 = {
    title: "Урок 31: Умножение чисел от 1 до 144",
    timePerProblem: 3,
    inputwidth: 60,

    getAllProblems: function() {
        var all = [];
        for (var i = 2; i <= 12; i++) {
            for (var j = 2; j <= 12; j++) {
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
        var all = level31.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}
