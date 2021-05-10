let level17 = {
    title: "Урок 17: Пропущенное число в примере на сложение",
    timePerProblem: 6,
    getAllProblems: function() {
        var all = [];
        for (var i = 1; i < 100; i++) {
            for (var j = 1; j < 100; j++) {
                if (i + j <= 100) {
                    var tmp = [];
                    tmp.push(i.toString());
                    tmp.push('+');
                    tmp.push(j.toString());
                    tmp.push('=');
                    var s = i + j;
                    tmp.push(s.toString());
                    all.push(tmp);
                }
            }
        }    
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level17.getAllProblems();
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
