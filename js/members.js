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
    members.push(member)
    let asString = JSON.stringify(members)
    localStorage.setItem("members", asString)
}

function advanceMember(name) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].name === name) {
            members[i].counter++;
            if (members[i].counter >= 3) {
                members[i].counter = 0
                members[i].level++
            }
        }
    }
    let asString = JSON.stringify(members)
    localStorage.setItem("members", asString)
}

function resetCounterForMember(name) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].name === name) {
            members[i].counter = 0;
        }
    }
    let asString = JSON.stringify(members)
    localStorage.setItem("members", asString)
}

function getLevelByMemberName(name) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].name === name) {
            return members[i].level;
        }
    }
    return 0;
}

function getCounterByMemberName(name) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].name === name) {
            return members[i].counter;
        }
    }
    return 0;
}

function memberNameAlreadyExists(name) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].name === name) {
            return true;
        }
    }
    return false;
}

