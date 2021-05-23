let level31 = {
    title: "Урок 31: Простые числа до 100",
    timePerProblem: 6,

    isPrime: function(num) {
        for (let i = 2; i*i < num; i++) {
            if (num % i === 0) { return false; }
        }
        return true;
    },

    getAllProblems: function() {
        let all = [];
        for (let i = 1; i <= 10; i++) {
            let line = [];
            let first = "Простые числа от "
            first += ((i - 1) * 10).toString()
            first += " до "
            first += (i * 10).toString()
            line.push(first)
            let second = ''
            for (let j = (i-1)*10; j <= i+10; j++) {
                if (level31.isPrime(j)) {
                    if (j != (i-1)*10) {
                        second += ','
                    }
                    second += j.toString()
                }
            }
            line.push('_' + second)
            all.push(line);
        }
        return all;
    },

    // specific
    getProblemsToSolve: function() {
        let all = level31.getAllProblems();
        let selected = getRandomElementsOfAnArray(all, all.length);
        return selected;
    }
}
