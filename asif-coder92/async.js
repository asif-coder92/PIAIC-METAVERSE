function getToastPromise() {
    return new Promise((resolve, reject) => {
      let toastChoice = 7;
      setTimeout(() => {
        if (toastChoice >= 5) {
          resolve("Toast is ready");
        } else {
          reject("I am not your slave to make a toast for you");
        }
      }, 2000);
    });
  }
  function getFryEggPromise() {
    return new Promise((resolve, reject) => {
      let fryEgg = 7;
      setTimeout(() => {
        if (fryEgg >= 5) {
          resolve("Eggs are fried");
        } else {
          reject("I am not your slave to make an egg for you");
        }
      }, 2000);
    });
  }
async function getResult(){
try{
    let result=await getToastPromise();
    console.log(result)
    let result2= await getFryEggPromise();
    console.log(result2);
}
catch(error){
    console.log(error)
}

}
getResult()