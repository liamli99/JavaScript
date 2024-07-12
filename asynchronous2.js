// Promise
// const guess = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num < 10) {
//             resolve('Success');
//         } else {
//             reject('Error');
//         }
//     })
// }

// guess(100)
//     // 'result' is the resolved value and 'error' is the rejected value!
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// Async/Await
const guess = (num) => {
    return new Promise((resolve, reject) => {
        if (num < 10) {
            resolve('Success');
        } else {
            reject('Error');
        }
    })
}

const start = async () => {
    try {
        // 'result' is the resolved value of the Promise
        const result = await guess(0);
        console.log(result);
    // 'error' is the rejected value of the Promise
    } catch (error) {
        console.log(error);
    }
}
start();

