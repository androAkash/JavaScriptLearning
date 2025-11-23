setTimeout(() => {
    console.log("time");
}, 5000);

let count = 10
let interval = setInterval(() => {
    if(count >= 0){
        console.log(count);
        count --
    }
    else clearInterval(interval) 
}, 1000);