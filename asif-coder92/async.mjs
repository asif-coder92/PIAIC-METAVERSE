//callback function

const func1=(callback)=>{
    console.log("funciton 1 invoked")
    callback()
 }
const func2=()=>{
    console.log("funciton2 invoked");
}

func1(func2) 