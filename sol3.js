// Problem 3 : Given an array of numbers find the average of all the even numbers.

let arr=[2,3,4,6,1,5,2,7,8,6];
let sum=0;
let count=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count++;
  }
}
console.log(sum/count)