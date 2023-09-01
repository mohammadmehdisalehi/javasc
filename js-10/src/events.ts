import { createListItem,validateFields } from "./functions.js";
import {
    contactNameInput,phoneNumberInput,deviceStorageInput,contentListDrawer,contactListElement    

} from "./importer.js";
import {
contactList
} from "./state.js";
import { Contactprops,ContactInfoType } from "./types";

export const showContactDrawerHandler= () =>{
    contentListDrawer?.classList.remove("bottom-[-100%]");
    contentListDrawer?.classList.add("bottom-[0%]");
};
export const closeContactDrawerHandler= () =>{
    contentListDrawer?.classList.add("bottom-[-100%]");
    contentListDrawer?.classList.remove("bottom-[0%]");
};
const validateCreateContact =(contactInfo:ContactInfoType)=>{
    if (!validateFields(contactInfo.contactName,contactInfo.phoneNumber+"")){
        alert("Fill all fields please!")
        throw Error ("Not all fields filled!")
    }
    console.log(validateFields)
}

export const createContactHandler= ()=>{
    validateCreateContact({contactName:contactNameInput!.value,phoneNumber:phoneNumberInput!.value})
    const newContact:Contactprops={
        id:crypto.randomUUID(),
        contactName:contactNameInput?.value?? "",
        phoneNumber:phoneNumberInput?.value?? "",
        avatar:null,
        storage:deviceStorageInput?.checked?"Device":"SIM",
    };
    contactList.push(newContact);
 const listItem=createListItem({contactName:newContact.contactName,phoneNumber:newContact.phoneNumber})
    contactListElement?.appendChild(listItem);
    }

