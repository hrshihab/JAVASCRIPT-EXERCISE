function argument(num1 , num2)
{
for (let index = 0; index < arguments.length; index++) {
  const element = arguments[index];
  console.log(element);
  
}
}

argument(2,3,4,5,7,8);