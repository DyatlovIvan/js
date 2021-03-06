console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
export default ()=>{};


// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     let b = 20;
//     setTimeout( (a, b) => {
//         console.log('a ', a, 'b ', b);
//         console.log('setTimeout ', a + b);
//     },50, a , b);
//     console.log('Promise ', a + b);
// });


// let prom = new Promise((res, rej) => {});
// console.log(prom);

// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     let b = 20;
//     setTimeout( (response) => { // fake callout
//         if ( response.status < 400 ) {
//             resolve(response.body);
//         } else {
//             reject(response.error);
//         }
//     },50, { status: 200, body: 10 });
// });
//
// console.log(prom)


// let prom = new Promise((resolve, reject) => {
//     resolve({ a: 10, b: 20, c: NaN });
//     reject(500);
// });
//
// console.log(prom)


// let prom = new Promise((resolve, reject) => {
//     reject(500);
//     resolve({ a: 10, b: 20, c: NaN });
//     console.log('YoYo');
// });
//
// console.log(prom)


// let prom : Promise<number> = new Promise((resolve, reject) => {
//     resolve(10);
// });
//
// prom
//     .then(res => {
//         console.log('Hello from callback');
//         console.log(res);
//         res *= 2;
//         //return res;
//     })
//     .then( res2 => {
//         console.log('res 2 ', res2);
//     })


// let prom : Promise<number> = new Promise((resolve, reject) => {
//     resolve(1024515);
// });
//
// prom
//     .then(res => {
//         return new Promise( (resolve, reject) => {
//             resolve({ name: 'Evgen', age: 33 });
//         });
//     })
//     .then( res2 => {
//         console.log('res 2 ', res2);
//     })


// let prom : Promise<number> = new Promise((resolve, reject) => {
//     reject(0);
// });
//
// prom
//     .then(res => {
//         console.log('res ', res);
//     },
//     err => {
//         console.log('err ', err);
//         return 500;
//     })
//     .then(res2 => {
//         console.log('res2 ', res2);
//     })



// let prom : Promise<number> = new Promise((resolve, reject) => {
//     reject(0);
// });
//
// prom
//     .then(res => {
//             console.log('res ', res);
//         },
//         err => {
//             console.log('err ', err);
//             return new Promise( (resolve, reject) => {
//                 resolve({ name: 'Evgen', age: 33 });
//             });
//         })
//     .then(res2 => {
//         console.log('res2 ', res2);
//     })



// let prom : Promise<number> = new Promise((resolve, reject) => {
//     reject(0);
// });
//
// prom
//     .then(res => {
//             console.log('res ', res);
//     })
//     .then(res2 => {
//         console.log('res2 ', res2);
//     })
//     .then(res3 => {
//         console.log('res3 ', res3);
//     })
//     .then(res4 => {
//         console.log('res4 ', res4);
//     })
//     .then(res5 => {
//         console.log('res5 ', res5);
//     })
    // .then(res6 => {
    //         console.log('res6 ', res6);
    // },
    // err => {
    //     console.log('err ', err);
    // })
    // .then(null, err => {
    //     console.log('err ', err);
    // })
    // .catch(err => {
    //     console.log('err ', err);
    // })


// let prom : Promise<number> = new Promise((resolve, reject) => {
//     resolve(0);
// });
//
// prom
//     .then(res => {
//         console.log('res ', res);
//     }, err => {
//         console.log('err ', err);
//     })
//     .then(res2 => {
//         console.log('res2 ', res2);
//     }, err2 => {
//         console.log('err2 ', err2);
//     })
//     .then(res3 => {
//         console.log('res3 ', res3);
//     }, err3 => {
//         console.log('err3 ', err3);
//     })
//     .then(null, err => {
//         console.log('err ', err);
//     })

// let prom : Promise<number> = new Promise((resolve, reject) => {
//     reject(-10);
// });
//
// prom
//     .catch(err => {
//         console.log(err);
//     })
//     .then(res => {
//         console.log('res ', res);
//         throw 50;
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .then(res2 => {
//         console.log('res2 ', res2);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .then(res3 => {
//         console.log('res3 ', res3);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// let prom : Promise<number> = new Promise((resolve, reject) => {
//     reject(-10);
// });
//
// prom
//     .finally(() => {
//         console.log('res in finally ');
//     })
//     .then(res => {
//         console.log('res ', res);
//         throw 50;
//     })
//     .finally(() => {
//         console.log('res in finally ');
//     })
//     .catch(err => {
//         console.log('err ', err);
//         return 1000;
//     })
//     //@ts-ignore
//     .finally(() => {
//         console.log('res in finally ');
//     })


// let prom : Promise<number> = new Promise((resolve, reject) => {
//     reject(-10);
// });
//
// prom
//     .finally(() => {
//         throw 100500
//     })
//
//     .then(res => {
//         console.log('res ', res);
//         throw 50;
//     })
//
//     .catch(err => {
//         console.log('err ', err);
//         return 1000;
//     })


// let prom : Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     },1000);
// });
//
// prom.then(res => {
//     console.log(res);
// })
//     .catch(err => {
//         console.log(err);
//     })


// console.log('start');
// Promise.resolve().then(() => {console.log('Promise')});
// console.log('end');

// let prom = new Promise(res => res(10));
// let prom2 = Promise.resolve(10);

// console.log('Start');
//
// async function f() {
//     console.log('Start function');
//     let a = await new Promise((res, rej) => {
//         setTimeout(() => res(100500),1000);
//     });
//     console.log('End function');
//     return a;
// }
//
// let result = f();
// console.log(result);
//
// result.then(console.log);
//
// console.log('End');

// let count = 0;
// let resultA = null;
//
// async function f() {
//     try {
//         console.log('Start function');
//         if (resultA === null) {
//             let a = await Promise.resolve(10);
//             resultA = a;
//         }
//         let b = await Promise.resolve(50);
//         let c = await Promise.resolve(100);
//         console.log('End function');
//         return a;
//     } catch (e) {
//         if (errr = 'error' && count < 5) {
//             count ++;
//             f(sddfsd)
//         }
//         dlfbhdjfbn,dfnb
//     }
// }
