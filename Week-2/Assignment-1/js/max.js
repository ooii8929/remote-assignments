function max(numbers){
    console.log('max')
    for(let i = 0 ; i <numbers.length; i++){
        for(let j = 0 ; j <numbers.length; j++){
            if (numbers[j]<numbers[j+1]){
                let temNum =  numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temNum;
            }
        }
    }
    return numbers[0];
}

console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7