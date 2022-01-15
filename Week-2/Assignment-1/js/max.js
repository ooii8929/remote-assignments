function max(numbers){
   
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

/* Custom Return Page */

/*input to array*/
function stringArrToNumber(array){
    let myArray;
    if(array.includes(',')){
        myArray = array.split(',');
    }else if(array.includes(' ')){
        myArray = array.split(' ');
    }else{
        let tmpArr = [];
        tmpArr.push(parseInt(array));
        return tmpArr;
    }
    
    let myNumberArray  = myArray.map(function(num) {
      return parseInt(num); 
    })
    return myNumberArray;
}

/* remove Nan */
function removeNull(array) {
    let temAr = array.filter(function (value) {
    return !Number.isNaN(value);
});
    return temAr;
};


const clickAsk = document.querySelector('#question-section button');


let dispalyQuestion = document.querySelector('.display-question');
let ans = document.querySelector('.answer');
let question= [];



/*display question*/
clickAsk.addEventListener('click',()=>{
    
    let ansContent = document.querySelector('#ask-question').value;
    let numberArray = stringArrToNumber(ansContent);
    question =  question.concat(numberArray);
    question  = removeNull(question)
    dispalyQuestion.textContent  = question;
    ans.textContent = `${max(question)}`;
})




