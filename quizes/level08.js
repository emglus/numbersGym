let level08 = {
    title: "Урок 8: Друзья десятки",
    timePerProblem: 3,
    getAllProblems: function () {
        var all = [];
        for (var i = 1; i < 10; i++) {
            var s = 10 - i;
            var tmp = [];
            tmp.push(i.toString());
            tmp.push('+');
            tmp.push('_' + s.toString());
            tmp.push('=');
            tmp.push('10');
            all.push(tmp);
        }
        return all;
    },
    getProblemsToSolve: function () {
        var all = level08.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, all.length);
        return selected;
    }
}

