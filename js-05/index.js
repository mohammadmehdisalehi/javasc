function randomDate(
    from = new Date(2020, 2, 2),
    to = new Date(),
  ) {
    return new Date(
      from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
  }




  const myList=[]
  function addToList(){
    const myObject ={

        myDate:randomDate(),
        myNumber:Math.random(),
        myName:randomName,

      }
myList.push(myObject)
  }

  console.log(mydate.dd)