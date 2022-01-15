function binarySearchPosition(numbers, target) {
    // your code here
    let L = 0;
    let R = numbers.length-1;

  
    while(L <= R){
        
        let m =  Math.floor((L+R)/2);
      
        if( numbers[m]<target){
            L = m+1;
        }else if(numbers[m]>target){
            R = m-1;
        }else{
            return m;
        }
        
    }
    return 'not found';

    }




console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3

console.log(binarySearchPosition([1, 2,2, 5, 6, 7], 2)); // test
console.log(binarySearchPosition([1, 2,2, 5, 6, 7],5)); // test
console.log(binarySearchPosition([1, 2,2, 5, 6, 7], 25)); // test
