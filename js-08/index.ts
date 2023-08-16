
    const displayButton=document.querySelector<HTMLInputElement>("#showbtn");
    const inputField1 = document.getElementById("title") as HTMLInputElement;
    const inputField2 = document.getElementById("desc") as HTMLInputElement;
    const displayZone = document.getElementById("displayZone") as HTMLDivElement;
    const displayArea = document.getElementById("displayArea") as HTMLDivElement;
    
    displayButton?.addEventListener("click", () => {
        displayZone.textContent = inputField1.value;
        displayArea.textContent = inputField2.value;
    });

      
   
   

