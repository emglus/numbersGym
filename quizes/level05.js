let level05 = {
    title: "Урок 5: Друзья двойки, тройки, четвёрки и пятерки",
    timePerProblem: 3,
    getAllProblems: function () {
        var all = [];

        for (var i = 1; i < 2; i++) {
            var s = 2 - i;
            var tmp = [];
            tmp.push(i.toString());
            tmp.push('+');
            tmp.push('_' + s.toString());
            tmp.push('=');
            tmp.push('2');
            all.push(tmp);
        }
    
        for (i = 1; i < 3; i++) {
            s = 3 - i;
            tmp = [];
            tmp.push(i.toString());
            tmp.push('+');
            tmp.push('_' + s.toString());
            tmp.push('=');
            tmp.push('3');
            all.push(tmp);
        }
    
        for (i = 1; i < 4; i++) {
            s = 4 - i;
            tmp = [];
            tmp.push(i.toString());
            tmp.push('+');
            tmp.push('_' + s.toString());
            tmp.push('=');
            tmp.push('4');
            all.push(tmp);
        }
    
        for (i = 1; i < 5; i++) {
            s = 5 - i;
            tmp = [];
            tmp.push(i.toString());
            tmp.push('+');
            tmp.push('_' + s.toString());
            tmp.push('=');
            tmp.push('5');
            all.push(tmp);
        }
        return all;
    },
    getProblemsToSolve: function () {
        var all = level05.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, all.length);
        return selected;
    }
}

