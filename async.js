console.log(1);
console.log(2);
const timeoutId = setTimeout(() => {
    console.log('lazy logged')
}, 4000)
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}
let num = 0;
const intervalId = setInterval(()=>{
    console.log(num++)
}, 1000)