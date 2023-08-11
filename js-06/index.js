"use strict";
let personList = [
    {
        id: "a-1a",
        name: "Amir",
        age: 19,
        major: "riazi",
    },
    {
        id: "a-1b",
        name: "shayan",
        age: 26,
        major: "computer",
    }
];
const createPerson = (person) => {
    personList.push(person);
};
const updatePerson = (person) => {
    const personInd = personList.findIndex((element) => element.id === person.id);
    personList[personInd] = Object.assign(Object.assign({}, personList[personInd]), person);
};
const removePerson = (person) => {
    const personInd = personList.findIndex((element) => element.id === person.id);
    let spliced = personList.splice(personInd, 1);
};
createPerson({
    id: "a-1c",
    name: "javad",
    age: 29,
    major: "software",
});
updatePerson({
    id: "a-1c",
    age: 27,
    major: "mechanic",
});
console.log(personList);
removePerson({
    id: "a-1b",
    age: 27,
    major: "mechanic",
});
console.log(personList);
