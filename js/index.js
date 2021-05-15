function updateMemberList() {
    let tableHeadRow = "<tr><th>Имя</th><th>Уровень</th></tr>";
    let buttonHead = '<button class="ng-button-small">';
    let buttonTail = '</button>';
    
    let memList = document.getElementById("memberList");
    memList.innerHTML = tableHeadRow;
    for (let i = 0; i < members.length; i++) {
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        cell1.innerHTML = buttonHead + members[i].name + buttonTail;
        row.appendChild(cell1);

        let cell2 = document.createElement("td");
        cell2.innerHTML = displayLevel(members[i].level, members[i].counter)
        row.appendChild(cell2);
        memList.appendChild(row);
    }
}

function displayLevel(level, counter) {
    let part1 = '<span class="w3-badge w3-xlarge">' + level.toString() + '</span>'
    for (let i = 0; i < counter; i++) {
        part1 += '<i class="material-icons">star</i>'
    }
    return part1;
}
