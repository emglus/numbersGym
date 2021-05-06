let level07 = {
    title: "Урок 7: Друзья восьмёрки и девятки",
    timePerProblem: 3,
    getAllProblems: function () {
        var all = [];
        for (var i = 1; i < 8; i++) {
            var s = 8 - i;
            var tmp = [];
            tmp.push(i.toString());
            tmp.push('+');
            tmp.push('_' + s.toString());
            tmp.push('=');
            tmp.push('8');
            all.push(tmp);
        }
        for (i = 1; i < 9; i++) {
            s = 9 - i;
            tmp = [];
            tmp.push(i.toString());
            tmp.push('+');
            tmp.push('_' + s.toString());
            tmp.push('=');
            tmp.push('9');
            all.push(tmp);
        }
    
        return all;
    },
    getProblemsToSolve: function () {
        var all = level07.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, all.length);
        return selected;
    }
}

