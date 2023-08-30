import {
    contactNameInput,phoneNumberInput,deviceStorageInput,contentListDrawer,contactListElement    

} from "./importer.js";
import {
contactList
} from "./state.js";
import { Contactprops } from "./types";

export const showContactDrawerHandler= () =>{
    contentListDrawer?.classList.remove("bottom-[-100%]");
    contentListDrawer?.classList.add("bottom-[0%]");
};
export const closeContactDrawerHandler= () =>{
    contentListDrawer?.classList.add("bottom-[-100%]");
    contentListDrawer?.classList.remove("bottom-[0%]");
};


export const createContactHandler= ()=>{
    const newContact:Contactprops={
        id:crypto.randomUUID(),
        contactName:contactNameInput?.value?? "",
        phoneNumber:phoneNumberInput?.value?? "",
        avatar:null,
        storage:deviceStorageInput?.checked?"Device":"SIM",
    };
    contactList.push(newContact);
    const listItem=document.createElement("li");
    const contactNameElement=document.createElement("h2");
    contactNameElement.innerText=newContact.contactName;
    const contactphoneNumberElement=document.createElement("p");
    contactphoneNumberElement.innerText=newContact.phoneNumber.toString();
    listItem.appendChild(contactNameElement);
    listItem.appendChild(contactphoneNumberElement);
    contactListElement?.appendChild(listItem);
    }

