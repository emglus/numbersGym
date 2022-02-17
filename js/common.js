var currentRow = 0;	// current problem. 0 before we stared, 1 to limit afterwards
var start;			// time the Start button is pressed
var finish;			// time the last answer is given
var problems = [];					// these are the problems to solve
var limit = problems.length;		// limit to number of exercises
var timePerProblem = 2;
var inputwidth = 40;
var timer = 0;

var currentName;
var currentLevel;
var currentCounter;
var runLevel;

//---------------------------------------------------

prepareQuiz();


//
// Functions
//


function prepareQuiz() {

	initMembers();
	
	currentName = localStorage.getItem('current');
	runLevel = parseInt(localStorage.getItem('runLevel'))

	let st1 = document.getElementById("status-1")
	let st2 = document.getElementById("status-2")

	if (currentName == null && isNaN(runLevel)) {
		st1.innerHTML = 'Пожалуйста выбери участника или урок'
		st2.innerHTML = ''
		return 
	}
	if (currentName != null) {
		if (getNotComplete(currentName)) {
			resetCounterForMember(currentName)
		}
		currentLevel = getLevelByMemberName(currentName);
		currentCounter = getCounterByMemberName(currentName);
		st1.innerHTML = currentName + " " + displayLevel(currentLevel, currentCounter);
	} else {
		st1.innerHTML = ""
	}

	let q = getQuizByLevelNumber(runLevel);
	
	problems = q.getProblemsToSolve();
	limit = problems.length;
	timePerProblem = q.timePerProblem;
	st2.innerHTML = q.title;
	inputwidth = q.inputwidth;
	
	let h2 = document.createElement('p');
	h2.innerHTML = "Реши " + limit + russian1(limit) + " за " + limit*timePerProblem + russian2(limit*timePerProblem);
	h2.id = "header2";
	let main = document.body.getElementsByTagName("main")
	main[0].appendChild(h2); 
	
	let h3 = document.createElement('p');
	h3.id = "header3";
	h3.innerHTML = "На старт, внимание...";
	main[0].appendChild(h3); 
	
	let btn0 = document.createElement('button');
	btn0.id = 'btn0';
	btn0.className = 'button';
	btn0.innerHTML = 'Марш!';	
	btn0.onclick = function() {
		startTest();
	}
	main[0].appendChild(btn0); 	
		
	let table = document.createElement('table');
	table.id = "table";
	main[0].appendChild(table); 
}

function startTest() {
	currentRow++;
	addRow(currentRow);
	
	timer = problems.length * timePerProblem;
	btn0.innerHTML = timer;	
	btn0.onclick = function() {} 	// do nothing

	setNotComplete(currentName, true)
	removeElementById("header3");

	start = Date.now();
	setTimeout(ctrF, 1000);
}

function ctrF() {
	if (timer > 0) {
		timer--;
		btn0.innerHTML = timer;	
		setTimeout(ctrF, 1000);
	} 
}

// n starts from 1 and continues to limit, for example, 15
function addRow(n) {
	let inpn2	// variable used by jQuery to focus

	if (n <= limit) {
		let row = document.createElement('tr');
		row.id = "row" + n;

		let ex = problems[n - 1];
		let count = ex.length;

		for (let i = 0; i < count; i++) {
			if (ex[i].startsWith('_')) {
				let c5 = document.createElement("td");
				c5.id = "result" + n;
				c5.className = "p09";
				row.appendChild(c5);
		
				let inp = document.createElement("input");
				inp.type = "text";
				
				let inpn = "inp" + n; 
				inp.className = inpn + " inp111";
				inp.id = inpn;
				inpn2 = '#' + inpn;

				inp.style.width = inputwidth + 'px';
				c5.appendChild(inp);
		
				$('body').on('keydown', inpn2, function (e) {
					let key = e.which;
					if (key === 13) {
						let tt = document.getElementById(inpn).value;
						if(tt.length > 0) {	// empty strings are not accepted
							removeElementById(inpn);
							numberButtonPressed(tt);
							return false;
						} 
					}
				});
			} else {
				let c1 = document.createElement("td");
				c1.innerHTML = ex[i];
				row.appendChild(c1);		
			}
		}
		
		table.appendChild(row);
		$(inpn2).focus();
	}
}

function numberButtonPressed(n) {
    let tmpId = "result" + currentRow;
	document.getElementById(tmpId).innerHTML = n;
	if (currentRow < limit) {
		currentRow++;
		addRow(currentRow);
	} else {
		finish = Date.now();
		completeExercise();
	}
}

function completeExercise() {
	let main = document.body.getElementsByTagName("main")
    let count = 0;
	for (let i = 0; i < limit; i++) {
		let ex = problems[i];
		let exlen = ex.length;
		let expected = '';
		for (let j = 0; j < exlen; j++) {
			if (ex[j].startsWith('_')) {
				expected = ex[j];
				break;
			}
		}
		expected = expected.substring(1);

		let resultId = i + 1;
		console.log(resultId);
		resultId = "result" + resultId.toString();
		console.log(resultId);
		let t = document.getElementById(resultId);
		console.log(t);
		if (t.innerHTML === expected) {
			count++;
			t.className = "green";
		} else {
			t.className = "red";
		}
	}

	let delta = Math.floor((finish - start) / 1000);
	let msg = '';

	if (count === limit && delta <= limit * timePerProblem) {
		let f1 = document.createElement('p');
		msg = "Молодец!";
		f1.innerHTML = msg;
		f1.className = "green";
		main[0].appendChild(f1);
		if (currentLevel === runLevel) {
			advanceMember(currentName)
		}
	} else {
		if (currentLevel === runLevel) {
			resetCounterForMember(currentName)
		}
	}
	setNotComplete(currentName, false)

	let f2 = document.createElement('p');
	msg = "Ты решил " + count + russian1(count);
	msg += " за " + delta + russian2(delta);
	
	f2.innerHTML = msg;
	main[0].appendChild(f2); 

	let btn2 = document.createElement('button');
	btn2.id = 'btn2';
	btn2.className = 'button';
	btn2.innerHTML = 'Повторить';	
	btn2.onclick = function() {
		location.reload()
	}
	main[0].appendChild(btn2); 	

	let btn3 = document.createElement('button');
	btn3.id = 'btn3';
	btn3.className = 'button';
	btn3.innerHTML = 'Дальше';	
	btn3.onclick = function() {
		currentName = localStorage.getItem('current');
		currentLevel = getLevelByMemberName(currentName);
		localStorage.setItem('runLevel', currentLevel)
		location.reload()
	}
	main[0].appendChild(btn3); 	

}

function russian1(count) {
    if (count === 1) return " пример";
	else if (count >= 2 && count <= 4) return " примера";
	else return " примеров";
}

function russian2(sec) {
	if (sec >= 10 && sec <=20) {
		return ' секунд';
	} else {
		let units = sec % 10;
		if (units === 1) return ' секунду';
		else if (units >= 2 && units <= 4) return ' секунды';
		else return ' секунд';
	}
}

function removeElementById(id) {
	let elem = document.getElementById(id);
	elem.parentNode.removeChild(elem);
}

// generic
// this function randomly selects count representatives from a 0 to max-1 
// if 0 to max-1 is a range of index values in an array that contains max elements,
// we can use this function to select count elements from the array.
function getRandomPick(range, count) {
    let source = [];
    let destination = [];
    for (let i = 0; i < range; i++) {
        source.push(i);
    }
    for (i = 0; i < count; i++) {
       let j = Math.floor(Math.random() * source.length);
       destination.push(source[j]);
       source.splice(j, 1); 
    }
    return destination;
}

function getRandomElementsOfAnArray(ar, count) {
    let randomSelection = [];
    let t = getRandomPick(ar.length, count);
    for (let i = 0; i < t.length; i++) {
        randomSelection.push(ar[t[i]]);
    }
    return randomSelection;
}

function displayLevel(level, counter) {
	let part1 = '<span class="w3-badge">' + level.toString() + '</span>'
	 for (let i = 0; i < counter; i++) {
		 part1 += '<i class="material-icons w3-small">star</i>'
	 }
	 return part1;
 }

 function isPrime(num) {
	if (num < 2) { return false; }
	for (let i = 2; i*i <= num; i++) {
		if (num % i === 0) { return false; }
	}
	return true;
}


