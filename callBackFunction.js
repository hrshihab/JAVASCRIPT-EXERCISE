function callBack(name , age, task)
{
  console.log(name , age);
  task();
}

function second()
{
  console.log("Wash your Leg");
}

let result = callBack("kolimuddin", 17 ,second )