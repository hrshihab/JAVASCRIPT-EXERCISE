var num=[1,2,1,2,3,4,5,4];
var unique=[];
for(i=0;i<num.length;i++)
{
  var index=unique.indexOf(num[i]);
  if(index==-1)
  {
    unique.push(num[i]);
  }

}
console.log(unique);