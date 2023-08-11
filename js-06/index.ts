type peopleObject=
{
  id:string;  
  name?:string;
  age?:number;
  major?:string;
};
let personList:peopleObject[]=[
    {
        id:"a-1a",  
        name:"Amir",
        age:19,
        major:"riazi",
      },
      {
        id:"a-1b",  
        name:"shayan",
        age:26,
        major:"computer",
      }
];
const createPerson = (person:peopleObject):void => {
    personList.push(person);
};
const updatePerson=(person:peopleObject)=>{
const personInd:number=personList.findIndex((element)=>element.id===person.id)
personList[personInd]={...personList[personInd],...person}
}
const removePerson=(person:peopleObject)=>{
    const personInd:number=personList.findIndex((element)=>element.id===person.id)
    let spliced = personList.splice(personInd, 1);
  
}
createPerson({
    id:"a-1c",  
    name:"javad",
    age:29,
    major:"software",
  })
  updatePerson({
    id:"a-1c",  
    age:27,
    major:"mechanic",
  })
  console.log(personList)
  removePerson({
    id:"a-1b",  
    age:27,
    major:"mechanic",
  })
  console.log(personList)