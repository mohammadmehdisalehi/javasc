"use strict";
let personList = [
    {
        id: "000-aaa",
        name: "zara",
        lastName: "Malek",
        age: 19,
        job: "Mechanic",
        maritalStatus: true,
        gender: "female",
        weight: 58,
        height: 164,
        phone: "0912546987",
    },
    {
        id: "001-aaa",
        name: "hamid",
        lastName: "jalili",
        age: 19,
        job: "Piper",
        maritalStatus: false,
        gender: "male",
        weight: 68,
        height: 176,
        phone: "0939746352",
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
    name: "jalal",
    lastName: "sins",
    age: 44,
    job: "unkown",
    maritalStatus: false,
    gender: "male",
    weight: 79,
    height: 183,
    phone: "44795848XXX",
});
updatePerson({
    id: "002-aaa",
    lastName: "sina",
});
removePerson({
    id: "000-aaa"
});
console.log(personList);
