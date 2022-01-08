function countAandB(input) {
    // your code here
    let a_let =0 ,b_let=0;
    for (let i = 0; i < input.length; i++) {
        
        if (input[i] == 'a'){
            a_let++;
        
        }else if(input[i] =='b'){
            b_let++;
        }
        
      }
    var total = a_let+b_let;
    if (total == 0) {
        return 0;
    }else{
        return total+'(' + a_let + '‘a’ letters and ' + b_let + '‘b’ letter)';
    }
    }
    
    function toNumber(input) {
    // your code here
    let tmp_list = [];
    for (let i = 0; i < input.length; i++) {
        tmp_list[i] = input[i].charCodeAt(0) - 96;
    }
    return tmp_list;
    }
    
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]