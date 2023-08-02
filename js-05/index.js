function randomDate(
    from = new Date(2020, 2, 2),
    to = new Date(),
  ) {
    return new Date(
      from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
  }

  function randomName(){
    const nameList=['ali','majid','hossein','karim','mohammad','mehdi','marzie','nasim','nader','aram','dani','reza','ahmad','sara','shakiba','shamim','shadi','shahla','saba','yaser','jasem','ghasem','kaezem','gholi','ghader','samir','samira','yas','saleh','salim']
    return nameList[Math.floor(Math.random() * nameList.length)];

    
  }


  const myList=[]
  function addToList(){
    const myObject ={

        myDate:randomDate(),
        myNumber:Math.floor(Math.random() * 100) + 1,
        myName:randomName(),

      }
myList.push(myObject)
  }
  addToList();
  console.log(myList);