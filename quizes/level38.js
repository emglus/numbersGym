let level38 = {
    title: "Урок 38: Разложение на простые множители чисел до 100",
    timePerProblem: 6,
    inputwidth: 160,

    getAllProblems: function() {
        let all = [];
        for (let i = 2; i <= 100; i++) {
            let line = [];
            let first = "Разложи на простые множители число "
            first += (i).toString()
            first += ': '
            line.push(first)
            let second = ''
            let f = i;
            while (!isPrime(f)) {
                for (let j = 2; j < f; j++) {
                    if (isPrime(j) && (f%j === 0)) {
                        if (second.length > 0) second += ','
                        second += j.toString();
                        f = f / j;
                        break;
                    }
                }
            } 
            if (second.length > 0) second += ','
            second += f.toString();
            line.push('_' + second)
            all.push(line);
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        let all = level38.getAllProblems();
        let selected = getRandomElementsOfAnArray(all, 15);
        return selected;
    }
}
