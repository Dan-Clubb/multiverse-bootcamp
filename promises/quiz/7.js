// async function timesBy5(num) {
//     return num * 5;
// }

// console.log(timesBy5(10));
// promise {50}

function pause(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    })
}

async function printWithDelay(arr, delay){
    for (let i = 0; i < arr.length; i++){
        await pause(delay);
        console.log(arr[i]);
    }
}
printWithDelay([1,2,3,4,5], 100);