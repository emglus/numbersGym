let level06 = {
    title: "Урок 6: Друзья шестерки и семёрки",
    timePerProblem: 3,
    getAllProblems: function () {
        var all = [];
        for (var i = 1; i < 7; i++) {
            var s = 7 - i;
            var tmp = [];
            tmp.push(i.toString());
            tmp.push('+');
            tmp.push('_' + s.toString());
            tmp.push('=');
            tmp.push('7');
            all.push(tmp);
        }
        for (i = 1; i < 6; i++) {
            s = 6 - i;
            tmp = [];
            tmp.push(i.toString());
            tmp.push('+');
            tmp.push('_' + s.toString());
            tmp.push('=');
            tmp.push('6');
            all.push(tmp);
        }
        return all;
    },
    getProblemsToSolve: function () {
        var all = level06.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, all.length);
        return selected;
    }
}

