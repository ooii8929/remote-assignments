async function main() {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
 
    const delayedResultPromise =await function delay(n1, n2, delayTime){
      
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(n1+n2);
        },delayTime); 
      });
    };
    
    await delayedResultPromise(4, 5, 3000);
    
    

};

main(); // result will be shown in the console after <delayTime> seconds  