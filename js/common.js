var timePerProblem = 2;
var currentRow = 0;	// current problem. 0 before we stared, 1 to limit afterwards
var start;			// time the Start button is pressed
var finish;			// time the last answer is given
var problems = [];					// these are the problems to solve
var limit = problems.length;		// limit to number of exercises
var timer = 0;

var currentName;
var currentLevel;
var currentCounter;
var runLevel;

//---------------------------------------------------

doQuiz();


//
// Functions
//


function doQuiz() {

	initMembers();
	
	currentName = localStorage.getItem('current');
	currentLevel = getLevelByMemberName(currentName);
	currentCounter = getCounterByMemberName(currentName);
	runLevel = parseInt(localStorage.getItem('runLevel'))

	let q = getQuizByLevelNumber(runLevel);
	
	problems = q.getProblemsToSolve();
	limit = problems.length;
	timePerProblem = q.timePerProblem;
	
	var info1 = document.createElement('p');
	info1.className = 'h1';
	info1.innerHTML = "Ученик: " + currentName + " Урок: " + currentLevel + " Очки: " + currentCounter;
	info1.id = "info1";
	document.body.appendChild(info1); 
	
	var h1 = document.createElement('p');
	h1.className = 'h1';
	h1.id = "header1";
	h1.innerHTML = q.title;
	document.title = q.title;
	document.body.appendChild(h1); 
	
	var h2 = document.createElement('p');
	h2.innerHTML = "Реши " + limit + russian1(limit) + " за " + limit*timePerProblem + russian2(limit*timePerProblem);
	h2.id = "header2";
	document.body.appendChild(h2); 
	
	var h3 = document.createElement('p');
	h3.id = "header3";
	h3.innerHTML = "На старт, внимание...";
	document.body.appendChild(h3); 
	
	var btn0 = document.createElement('button');
	btn0.id = 'btn0';
	btn0.className = 'button';
	btn0.innerHTML = 'Марш!';	
	btn0.onclick = function() {
		startTest();
	}
	document.body.appendChild(btn0); 	
		
	var buttons = document.createElement('div');
	buttons.id = "btns";
	document.body.appendChild(buttons); 
	
	var table = document.createElement('table');
	table.id = "table";
	document.body.appendChild(table); 
	
	// Here ends definition of the page elements.
	// The action starts when the user presses btn0
}

function startTest() {
	//problems = getProblemsToSolve();
	//limit = problems.length;

	currentRow++;		// table rows start from 1 
	addRow(currentRow);
	
	//removeElementById("btn0");
	timer = problems.length * timePerProblem;
	btn0.innerHTML = timer;	
	btn0.onclick = function() {} 	// do nothing

	removeElementById("header3");
	//removeElementById("header2");
	removeElementById("header1");
	
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
	if (n <= limit) {
		var row = document.createElement('tr');
		row.id = "row" + n;

		var ex = problems[n - 1];
		var count = ex.length;

		for (var i = 0; i < count; i++) {
			if (ex[i].startsWith('_')) {
				var c5 = document.createElement("td");
				c5.id = "result" + n;
				c5.className = "p09";
				row.appendChild(c5);
		
				var inp = document.createElement("input");
				inp.type = "text";
				
				var inpn = "inp" + n; 
				inp.className = inpn + " inp111";
				inp.id = inpn;
				var inpn2 = '#' + inpn;
				c5.appendChild(inp);
		
				$('body').on('keydown', '#' + inpn, function (e) {
					var key = e.which;
					if (key === 13) {
						var tt = document.getElementById(inpn).value;
						if(tt.length > 0) {	// empty strings are not accepted
							removeElementById(inpn);
							numberButtonPressed(tt);
							return false;
						} 
					}
				});
			} else {
				var c1 = document.createElement("td");
				c1.innerHTML = ex[i];
				row.appendChild(c1);		
			}
		}
		
		table.appendChild(row);
		$(inpn2).focus();
	}
}

function numberButtonPressed(n) {
    var tmpId = "result" + currentRow;
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
    let count = 0;
	for (var i = 0; i < limit; i++) {
		var ex = problems[i];
		var exlen = ex.length;
		var expected = '';
		for (var j = 0; j < exlen; j++) {
			if (ex[j].startsWith('_')) {
				expected = ex[j];
				break;
			}
		}
		expected = expected.substring(1);

		var resultId = i + 1;
		console.log(resultId);
		resultId = "result" + resultId.toString();
		console.log(resultId);
		var t = document.getElementById(resultId);
		console.log(t);
		if (t.innerHTML === expected) {
			count++;
			t.className = "green";
		} else {
			t.className = "red";
		}
	}

	var delta = Math.floor((finish - start) / 1000);
	var msg = '';

	if (count === limit && delta <= limit * timePerProblem) {
		var f1 = document.createElement('p');
		msg = "Молодец!";
		f1.innerHTML = msg;
		f1.className = "green";
		document.body.appendChild(f1);
		if (currentLevel === runLevel) {
			advanceMember(currentName)
		}
	} else {
		if (currentLevel === runLevel) {
			resetCounterForMember(currentName)
		}
	}

	var f2 = document.createElement('p');
	msg = "Ты решил " + count + russian1(count);
	msg += " за " + delta + russian2(delta);
	
	f2.innerHTML = msg;
	document.body.appendChild(f2);

	var btn1 = document.createElement('button');
	btn1.id = 'btn1';
	btn1.className = 'button';
	btn1.innerHTML = 'Содержание';	
	btn1.onclick = function() {
		history.back();
	}
	document.body.appendChild(btn1); 	

	var btn2 = document.createElement('button');
	btn2.id = 'btn2';
	btn2.className = 'button';
	btn2.innerHTML = 'Повторить';	
	btn2.onclick = function() {
		location = location;
	}
	document.body.appendChild(btn2); 	

	var btn3 = document.createElement('button');
	btn3.id = 'btn3';
	btn3.className = 'button';
	btn3.innerHTML = 'Дальше';	
	btn3.onclick = function() {
		currentName = localStorage.getItem('current');
		currentLevel = getLevelByMemberName(currentName);
		localStorage.setItem('runLevel', currentLevel)
		location = location;
	}
	document.body.appendChild(btn3); 	

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
		var units = sec % 10;
		if (units === 1) return ' секунду';
		else if (units >= 2 && units <= 4) return ' секунды';
		else return ' секунд';
	}
}

function removeElementById(id) {
	var elem = document.getElementById(id);
	elem.parentNode.removeChild(elem);
}

// generic
// this function randomly selects count representatives from a 0 to max-1 
// if 0 to max-1 is a range of index values in an array that contains max elements,
// we can use this function to select count elements from the array.
function getRandomPick(range, count) {
    var source = [];
    var destination = [];
    for (var i = 0; i < range; i++) {
        source.push(i);
    }
    for (i = 0; i < count; i++) {
       var j = Math.floor(Math.random() * source.length);
       destination.push(source[j]);
       source.splice(j, 1); 
    }
    return destination;
}

// generic
function getRandomElementsOfAnArray(ar, count) {
    var randomSelection = [];
    var t = getRandomPick(ar.length, count);
    for (var i = 0; i < t.length; i++) {
        randomSelection.push(ar[t[i]]);
    }
    return randomSelection;
}

/*
function getProblemsToSolve() {
    var problems = [];
    var prob = [];
    prob.push('2', '+', '2', '=', '_4');
    problems.push(prob);

    prob = [];
    prob.push('3', '+', '_3', '=', '6');
    problems.push(prob);

    return problems;
}
*/
