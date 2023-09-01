import {ContactInfoType } from "./types";
export const createListItem=(contactInfo:ContactInfoType):HTMLLIElement=>{
const listItem=document.createElement("li");
listItem.className="mb-2 py-3 px-2  bg-emerald-600 rounded-lg";
const contactNameElement=document.createElement("h2");
// contactNameElement.className="text-slate-800 ";
contactNameElement.innerText=contactInfo.contactName;
const contactphoneNumberElement=document.createElement("p");
contactphoneNumberElement.innerText=contactInfo.phoneNumber.toString();
// contactphoneNumberElement.className="text-slate-500 ";
listItem.appendChild(contactNameElement);
listItem.appendChild(contactphoneNumberElement);    
return (listItem)
};
export const validateFields=(...fields:string[]):boolean => {
    return fields.every((field)=>!!field.toString())
};
