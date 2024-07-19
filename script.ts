//these values can be empty or have a typo so we are telling ts complier that ! (I checked and this exists) and typecasted it as htmlinputelemnt
const value1 = document.getElementById("input1")! as HTMLInputElement;
const value2 = document.getElementById("input2")! as HTMLInputElement;

const addButton = document.getElementById("button");

//provide type safety to function args
function add(num1:number,num2:number){
    return num1 + num2;
}

//typecasting the value1 and value2 by (+)
addButton?.addEventListener("click",()=>{
    console.log(add(+value1.value,+value2.value));
})