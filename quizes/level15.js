let level15 = {
    title: "Урок 15: Пропущенное число в примере на вычитание",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i < 20; i++) {
            for (var j = 1; j < 20; j++) {
                if (i + j <= 20) {
                    var s = i + j;
                    var tmp = [];
                    tmp.push(s.toString());
                    tmp.push('-');
                    tmp.push(i.toString());
                    tmp.push('=');
                    tmp.push(j.toString());
                    all.push(tmp);
                }
            }
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level15.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 15);
        // in this particular exercise, either first or second additive 
        // is unknown and must be found
        for (var i = 0; i < selected.length; i++) {
            var t = getRandomPick(2, 1);
            if (t[0] === 0) {
                selected[i][0] = '_' + selected[i][0];
            } else {
                selected[i][2] = '_' + selected[i][2];
            }
        }
        return selected;
    }
}
