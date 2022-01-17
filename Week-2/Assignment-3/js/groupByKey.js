function groupByKey(input) {
    let ans = {};
    for(let i = 0 ; i < input.length;i++){
        //get input key
        let objectKey=  Object.values(input[i])[0];
        //get input value
        let objectValue=  Object.values(input[i])[1];
        let ansLength= Object.keys(ans).length;
        let repeat;

        //check ans loop
        for(let j = 0 ; j < ansLength;j++){
            repeat = false;
            if(Object.keys(ans)[j] === objectKey){
                repeat = true;
                break;
            }else{
                repeat = false;
            }

        }   
        
        //assign values
        if(repeat){
            ans[objectKey] += objectValue;
        }else{
            ans[objectKey] = objectValue;
        }
        
        

    }
    return ans;
}





let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
    ];

    
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}

