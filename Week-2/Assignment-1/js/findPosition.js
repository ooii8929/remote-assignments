
function findPosition(numbers,target){
    console.log('findPosition')
    for(let i = 0 ; i < numbers.length; i++ ){
        if(target === numbers[i]){
            return i;
        }
        
    }

    return '-1';
    

}



console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
//let numbers =  prompt("Give an array of numbers with space, I will return the max value of that.")