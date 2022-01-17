function count(input) {

    var ans ={};
    for(let i = 0 ; i < input.length;i++){
        let num = 0;
        let calculate = true;
        /* if repeated calculation than pass*/
        for(let n = 0 ; n<Object.keys(ans).length;n++){
            if(input[i]===Object. keys(ans)[n]){
                calculate = false;
            } 
        }
        /* match every item and add num */
        if(calculate){
            for(let j= 0; j<input.length;j++){
                if(input[i] === input[j]){
                    num++;
                }
            }
        }else{
            continue;
        }
        /* put in object */
        ans[input[i]] = num;
    
    }

    return ans;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x","t","w","x"];
console.log(count(input1));
// should print}} {a:3, b:1, c:2, x:1}


