function updateMemberList() {
    let tableHeadRow = "<tr><th>Username</th><th>Level</th><th>Counter</th></tr>";
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
        cell2.innerHTML = members[i].level.toString();
        row.appendChild(cell2);
        let cell3 = document.createElement("td");
        cell3.innerHTML = members[i].counter.toString();
        row.appendChild(cell3);
        memList.appendChild(row);
    }
}
