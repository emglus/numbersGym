let level24 = {
    title: "Урок 24: Таблица умножения на 6",
    timePerProblem: 3,
    getAllProblems: function() {
        var all = [];
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        var all = level24.getAllProblems();
        var selected = getRandomElementsOfAnArray(all, 12);
        return selected;
    }
}
