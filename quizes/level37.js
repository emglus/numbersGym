let level37 = {
    title: "Урок 37: Простые числа до 100",
    timePerProblem: 8,
    inputwidth: 160,

    getAllProblems: function() {
        let all = [];
        for (let i = 1; i <= 10; i++) {
            let line = [];
            let first = "Простые числа от "
            first += ((i - 1) * 10).toString()
            first += " до "
            first += (i * 10).toString()
            first += ': '
            line.push(first)
            let second = ''
            for (let j = (i-1)*10; j <= i*10; j++) {
                if (isPrime(j)) {
                    second += j.toString()
                    second += ','
                }
            }
            line.push('_' + second.substr(0, second.length-1))
            all.push(line);
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        let all = level37.getAllProblems();
        let selected = getRandomElementsOfAnArray(all, all.length);
        return selected;
    }
}
