console.log('Lesson 7');

// console.dir(() => {});
// console.dir(function () {});
// console.dir(class {});

// let someFunc = function() {};
// let anotherSomeFunc = () => {};
//
// console.dir(someFunc)
// console.dir(anotherSomeFunc)

// function Test(name) {
//     this.name = name;
// }
//console.dir(Test);

// let obj = new Test('Evgen');
// //console.log(obj);
//
// //console.log(obj.__proto__ === Test.prototype);
// let objProto = Object.getPrototypeOf(obj);
// console.log(objProto);
// console.log(objProto === Test.prototype);


// let obj = new Test('Evgen');
// let obj2 = new Test('Hanna');
//
// obj.__proto__.sayName = function () {
//     console.log('My name is ', this.name);
// }
// obj2.sayName();
//
// let obj3 = new Test('Vlad');
// obj3.sayName();
//
//
//
// let obj3Proto = Object.getPrototypeOf(obj3);
// obj3Proto.someFunck = function (){};
//
// console.dir(Test);

// function Test(name) {
//     this.name = name;
//     this.sayName = function (){};
// }
//
// console.dir(Test);
//
// let obj = new Test('Evgen');
// let obj2 = new Test('Hanna');
//
// //console.log(obj.sayName === obj2.sayName);
//
//
// class testClass {
//     constructor(name) {
//         this.name = name;
//         //this.sayName = function (){};
//     }
//
//         sayName() {
//
//     }
//
//     someMethod = () => {}
// }
//
// let classObj = new testClass('Evgen');
// let classObj2 = new testClass('Hanna');
//console.log(classObj.sayName === classObj2.sayName);
// console.dir(testClass);
// console.log(classObj);


// function Test(name) {
//     this.name = name;
// }
// //Test.prototype.sayName = function () {};
// Test.prototype = {
//     constructor: Test,
//     sayName() {},
//     sayBye() {},
// }
// let obj = new Test('Evgen');
// console.log(obj);
//
// let customProto = {
//     someFunc() {},
// }
//
// let customProto2 = {
//     someFunc2() {},
// }
//
// obj.__proto__ = customProto;
// console.log(obj);
//
// Object.setPrototypeOf(obj, customProto2);
// console.log(obj);


// function Test(name) {
//     this.name = name;
// }
// //Test.prototype.sayName = function () {};
// Test.prototype = {
//     constructor: Test,
//     sayName() {},
//     sayBye() {},
// }
//
// let obj = new Test('Evgen');
//
// // delete obj.__proto__.sayBye;
// // console.dir(Test);
//
// let ovjProto = Object.getPrototypeOf(obj);
// delete ovjProto.sayBye;
// console.dir(Test);

// class testClass {
//     constructor(name) {
//         this.name = name;
//     }
//         sayName() { }
// }
//
// testClass.prototype = null;
//
// let obj = new testClass('Evgen');
// //obj.__proto__.sayYo = function (){};
// //delete obj.__proto__.sayName;
// console.dir(testClass);

//
// class Test {
//     constructor(name) {
//         this.name = name;
//     }
//     sayName() { console.log('Test')}
// }
//
// class Test2 extends Test {
//     constructor(name) {
//         super(name);
//     }
//     sayYo() {}
//     sayName() { console.log('Test2')}
//     parentSayName() {
//         super.sayName();
//     }
// }
//
// class Test3 extends Test2 {
//     constructor(name) {
//         super(name);
//     }
//     sayBye(){
//         super.parentSayName();
//         this.__proto__.__proto__.__proto__.sayName();
//     };
// }
// let obj = new Test3('Evgen');

// let obj = new Test3('Evgen');
// console.log(obj);
// //
// // obj.sayName();
//
// console.log( obj instanceof Test3 );
// console.log( obj instanceof Test2 );
// console.log( obj instanceof Test );
//
// console.log(new obj.constructor('Hanna'));

function Test(name) {
    this.name = name;
}

Test.prototype.sayName = function () {};

// let obj = new Test('Evgen');
// console.log(obj);

// function Test2(name, age) {
//     Test.call(this, name);
//     this.age = age;
// }
//
// Test2.prototype.sayBye = function () {};
//
// let obj = new Test2('Evgen', 33);
// console.log(obj);



// function Test2(name, age) {
//     this.age = age;
//     console.log('before', Object.assign(this, new Test(name)))
//     return Object.assign(this, new Test(name));
// }
//
// Test2.prototype.sayBye = function () {};
//
// let obj = new Test2('Evgen', 33);
// console.log('after', obj);



// function Test2(name, age) {
//     Test.call(this, name);
//     this.age = age;
// }
//
// Test2.prototype = Object.create(Test.prototype, { constructor : { value: Test2 }, sayBye: {value: function (){}}});
//
// let obj = new Test2('Evgen', 33);
// console.log(obj);
//
// Function.prototype.customBind = function (ctx, ...args) {
//     const originFunc = this;
//     return function (...args2) {
//         return originFunc.apply(ctx, [...args, ...args2]);
//     }
// }

Function.prototype._bind = function (ctx, ...args) {
    ctx.____bindedFunc____ = this;
    return function (...args2) {
        return ctx.____bindedFunc____(...args, ...args2);
    }
}

let obj = {name: 'Yo', sayName(a1, a2) {console.log(this.name, a1, a2)}};
let obj2 = {name: 'Evgen'};
let obj3 = {name: 'Vlad'};


console.log(obj.sayName._bind(obj2, 10)._bind(obj3, 50)());