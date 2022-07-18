var a=100;
var b=190;
var c=12;
//traditional formula
if(a>b)
{
  if(a>c) console.log("A is big");
  else console.log("C is big");
}
else if(b>c) 
{
  if(b>a) console.log("B is big");
  else console.log("A is big");

}
else console.log("C is big");

//Math.max() formula 
var max=Math.max(a,b,c);
console.log("Max is: "+ max); 

//conditional formula

if(a>b && a>c) console.log("A");
else if(b>a && b>c) console.log("B");
else console.log("C");