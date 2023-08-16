"use strict";
let personList = [
    {
        id: "000-aaa",
        name: "Amir",
        age: 19,
        maritalStatus: true,
        major: "riazi",
    },
    {
        id: "001-aaa",
        name: "shayan",
        age: 26,
        maritalStatus: true,
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
    personList = personList.splice(personInd, 1);
};
function sortArrayOfObjects(array, property, ascending = true) {
    const sortedArray = array.slice();
    sortedArray.sort((a, b) => {
        const aValue = a[property];
        const bValue = b[property];
        if (aValue < bValue) {
            return ascending ? -1 : 1;
        }
        else if (aValue > bValue) {
            return ascending ? 1 : -1;
        }
        else {
            return 0;
        }
    });
    return sortedArray;
}
const sortedArray = sortArrayOfObjects(personList, 'name');
console.log(sortedArray);
createPerson({
    id: "002-aaa",
    name: "javad",
    age: 29,
    maritalStatus: false,
    major: "software",
});
updatePerson({
    id: "002-aaa",
    age: 27,
});
removePerson({
    id: "000-aaa"
});
console.log(personList);
