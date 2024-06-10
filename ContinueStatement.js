/* Here's a brief example to desmostrate the continue
 statement You can read the test of the tutorial to learn more
*/
//display odd numbers

for(let i = 1; i<=5; i++){
if (i % 2 === 0){

continue;  //Here continue skips the rest of the loop's body 


}


console.log(i);

}



//Example continue with for loop


for (let i=1; i<=10; i++){

//skipt iteration if value of
//i is between 4 and 9


if (i> 4 && i<9 ){

    continue;
}

console.log.apply(i);

}

//Example2

//we can also use the continue statement whit a while loop
var num = 1;
while (num <= 10){
//skip iteration if num is even
if (num % 2 ===0){
++num;
continue;


}
console.log(num);
++num;

}