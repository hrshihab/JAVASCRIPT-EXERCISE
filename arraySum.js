var num=[1,2,4,5,3,2];
function getArraySum(num)
{
  var sum=0;
  for(i=0;i<num.length;i++)
  {
    sum=sum+num[i];

  }
  return sum;
}
var sum = getArraySum(num);
var sum2=getArraySum([1,2,4]);
console.log(sum2);
console.log(sum);