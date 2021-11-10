//Version 01
//Create the variables
var currentPosition=10;
var nextPosition=85;
var distance=30;
var numOfJumps=[];
//Determine how many jumps the frog will do to reach the next position
var operation=nextPosition/distance;
for (let index = 0; index < operation; index++) 
{
    if (currentPosition<nextPosition) 
        {
            numOfJumps.push(distance);
            console.log(numOfJumps);
            console.log(numOfJumps.length)
        }
}


//Version 02
function solution(X, Y, D) 
{
var currentPosition=X;
var nextPosition=Y;
var distance=D;
var numOfJumps=[];
//Determine how many jumps the frog will do to reach the next position
var operation=nextPosition/distance;
for (let index = 0; index < operation; index++) 
{
    if (currentPosition<nextPosition) 
        {
            numOfJumps.push(distance);
        }
}
return numOfJumps.length;
}
