"use strict";
const displayButton = document.querySelector("#showbtn");
const inputField1 = document.getElementById("title");
const inputField2 = document.getElementById("desc");
const displayZone = document.getElementById("displayZone");
const displayArea = document.getElementById("displayArea");
displayButton === null || displayButton === void 0 ? void 0 : displayButton.addEventListener("click", () => {
    displayZone.textContent = inputField1.value;
    displayArea.textContent = inputField2.value;
});
//# sourceMappingURL=index.js.map