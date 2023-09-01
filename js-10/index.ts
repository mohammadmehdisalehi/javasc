
import{
 closeDrawer,
 showContactButton,
 submitButton,
}from "./src/importer.js"
import {showContactDrawerHandler,closeContactDrawerHandler,createContactHandler} from "./src/events.js"
showContactButton?.addEventListener("click",showContactDrawerHandler);
closeDrawer?.addEventListener("click",closeContactDrawerHandler);
submitButton?.addEventListener("click",createContactHandler);



