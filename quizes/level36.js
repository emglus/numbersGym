let level36 = {
    title: "Урок 36: Пропущенное число в примере на умножение и деление",
    timePerProblem: 7,
    inputwidth: 60,

    getAllProblems: function() {
        var all = [];
        // multiplication
        for (let i = 2; i <= 100; i++) {
            for (let j = 2; j <= (200 / i); j++) {
                let tmp = [];
                tmp.push(i.toString());
                tmp.push('x');
                tmp.push(j.toString());
                tmp.push('=');
                let s = i * j;
                tmp.push(s.toString());
                all.push(tmp);
            }
        }
        // division
        for (let i = 2; i <= 100; i++) {
            for (let j = 2; j <= (200 / i); j++) {
                let s = i * j;
                let tmp = [];
                tmp.push(s.toString());
                tmp.push('/');
                tmp.push(i.toString());
                tmp.push('=');
                tmp.push(j.toString());
                all.push(tmp);
            }
        }    
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level36.getAllProblems();
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
