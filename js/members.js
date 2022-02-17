"use strict";
var members = null;

function initMembers() {
    let str1 = localStorage.getItem("members");
    if (str1 != null && str1 != undefined) {
        members = JSON.parse(str1);
    } else {
        members = [];
    }
    console.log("Number of members: " + members.length);
    console.log(str1);
}

function resetMembers() {
    localStorage.clear();
    initMembers();
}

function addMember(name) {
    let member = {};
    member.name = name
    member.level = 1
    member.counter = 0
    member.toc = [0,0,0,0,0,0,0]
    member.notComplete = false
    members.push(member)
    localStorage.setItem("members", JSON.stringify(members))
}

function advanceMember(name) {
    for (let m of members) {
        if (m.name === name) {
            m.counter++;
            if (m.counter >= 3) {
                m.counter = 0
                m.level++
            }
        }
    }
    localStorage.setItem("members", JSON.stringify(members))
}

function resetCounterForMember(name) {
    for (let m of members) {
        if (m.name === name) {
            m.counter = 0;
        }
    }
    localStorage.setItem("members", JSON.stringify(members))
}

function getLevelByMemberName(name) {
    for (let m of members) {
        if (m.name === name) {
            return m.level;
        }
    }
    return 0;
}

function getCounterByMemberName(name) {
    for (let m of members) {
        if (m.name === name) {
            return m.counter;
        }
    }
    return 0;
}

function memberNameAlreadyExists(name) {
    for (let m of members) {
        if (m.name === name) {
            return true;
        }
    }
    return false;
}

function toggleTOC(name, index) {
    // index starts with 0
    for (let m of members) {
        if (m.name === name) {
            if (m.toc[index] === 0) {
                m.toc[index] = 1
            } else {
                m.toc[index] = 0
            } 
        }
    }
    localStorage.setItem("members", JSON.stringify(members))
}

function getTOCToggleState(name, index) {
    // index starts with 0
    for (let m of members) {
        if (m.name === name) {
            return m.toc[index]
        }
    }
}

function setNotComplete(name, nc) {
    for (let mem of members) {
        if (mem.name === name) {
            mem.notComplete = nc
        }
    }
    localStorage.setItem("members", JSON.stringify(members))
}

function getNotComplete(name) {
    for (let mem of members) {
        if (mem.name === name) {
            return mem.notComplete
        }
    }
}
