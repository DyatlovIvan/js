import {findAllByDisplayValue} from "@testing-library/react";

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


function person() {
    let name = 'Peter';

    return function displayName() {
        console.log(name);
    };
}

let peter = person();
peter();


// anonymous block, conditions, functions/class, loops, try/catch/finally, switch
// {} - object literal do not create lexical block

// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 30, // 10 -> 20 -> 30
// }
//
// let a = 10;
//
// function f(arg: number) {
//     let fScope = {
//         outerScope: globalScope,
//         arg: 10,
//     };
//
//     a += 10;
//     console.log(a);
//     a += arg;
// }
//
// f(10);
//
// console.log(a);


// let globalScope = {
//     outerScope: null,
//     b: 10, // undefined -> 10
//     f: 'Function',
//     result: 'Function', // undefined -> 'Function'
//     a: 50, // undefined -> 50
// }
//
// let a;
// var b = 10;
//
// function f(arg: number) {
//     let fScope = {
//         outerScope: globalScope,
//         c: 60, // undefined -> 60
//         innerFunc: 'Function',
//         arg: 10,
//     };
//
//     a = 50;
//     console.log(b); //10
//     var c = a + b;
//     function innerFunc() {
//         let innerFuncScope = {
//             outerScope: fScope,
//         };
//
//         console.log(c + arg); // 1) 70 2) 70
//     }
//     return innerFunc;
// }
//
// var result = f(10);
// result();
// result();
// console.log(a); // 50


// let globalScope = {
//     outerScope: null,
//     c: 10,
//     f: 'Function',
//     a: 50,
//     b: 60,
// }
//
// {
//     let anonymiusScope = {
//         outerScope: globalScope,
//         param: 10,
//     };
//
//     let param = 10;
//     var c = 10;
//     //@ts-ignore
//     function f(arg) {
//         let fScope = {
//             outerScope : anonymiusScope,
//             arg: 50, // undefined -> 50
//         }
//         return arg + c;
//     }
// }
//
// let a = 50;
// //@ts-ignore
// let b = f(a);
// if (b > 50) {
//     let trueScope = {
//         outerScope : globalScope,
//         a: 80,
//     };
//
//     let a = 80; // 80
//     console.log(a);
// } else {
//     let a = 100;
//     console.log(a);
// }


// let globalScope = {
//     obj: 'Object'
// }
//
// let obj =  {
//     name: 'Evgen',
//     sayName() {
//         let sayNameScope = {
//             outerScope: globalScope,
//         };
//
//         //console.log(this.name);
//         console.log(obj.name);
//     }
// };
//
// obj.sayName()


///// Recursion

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(n: number) {
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//         result += i;
//     }
//     return result;
//
//     // let result = 0;
//     // for (let i = 0; i <= n; i++)  result += i;
//     // return result;
// }

// function sumTo(n: number): number {
//     if (n === 1) return n;
//     return n + sumTo(n - 1);
// }

// function sumTo(n: number, acc: number): number {
//     if (n === 1) return n + acc;
//     return sumTo(n - 1, n + acc);
// }
//
// console.log(sumTo(3, 0));


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
const sum = (a: number) => {
    return function (b: number) {
        return a + b
    }
}
console.log(sum(3)(9))
// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
const makeCounter = () => {
    let count: number = 0;
    return function () {
        return ++count
    }
}

const counter = makeCounter();
const counter2 = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

console.log(counter2()); // 1


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:

const makeCounter02 = (num: number) => {

    return function action(use: string | number) {
        if (use === 'increase') {
            return num = num + 1
        } else if (use === 'decrease') {
            return num = num - 1
        } else if (use === 'reset') {
            return num = 0
        } else {
            if (typeof use === 'number') {
                return num = use
            }
        }
    }
}

const action = makeCounter02(10);
console.log(action('increase'))
console.log(action('decrease'))
console.log(action('reset'))
console.log(action(100))


// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

function pow(x: number, n: number): number {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log((pow(2, 3)))

const sumTo = (num: number): number => {
    if (num === 1) {
        return 1
    } else {
        return num + sumTo(num - 1)
    }
}
console.log((sumTo(100)))


const factorial = (num: number):number => {
    if (num === 1) {
        return 1
    } else {
        return num*(factorial (num-1))
    }

}
console.log(factorial(5))

function fib(n:number):number {
   // return n<=1?n: fib(n-1) + fib(n-2)
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
//alert(fib(60));
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};