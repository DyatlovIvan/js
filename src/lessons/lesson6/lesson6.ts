import {log} from "util";

console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA


// function Test(name, age) {
//     this.name = name;
//     this.age = age;
//     //this.sayName = function() { console.log(this.name)};
// }
//
// Test.prototype.sayName = function() { console.log(this.name)};
//
// let person = new Test ('Evgen', 33);
// console.log(person);

//console.dir(function (){});
//console.dir(class {});

// class Test {
//     name: string;
//     age: number;
//     //sayName: Function;
//     bindedSayName: Function;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         //this.sayName = function() { console.log(this.name)};
//         this.bindedSayName = this.sayName.bind(this);
//     }
//
//     sayName() {
//         console.log(this.name)
//     }
//
//     sayBye = () => {
//         console.log(this.age);
//     }
//
// }
//
// //@ts-ignore
// //Test.prototype.sayName = function() { console.log(this.name)};
//
// let person =  new Test ('Evgen', 33);
// console.log(person)

// interface ITest {
//     name: string;
//     age: number;
//     sayName: Function
// }
//
// interface ITest2 {
//     name: string;
//     sayYo: Function;
// }
//
// class Test implements ITest, ITest2 {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayName() {
//         console.log(`My name is - ${this.name}`);
//     }
//
//     sayBye = () => {}
//
//     sayYo() {}
// }

//
// interface IPerson extends ITest, ITest2 {
//     city : string;
//     sayBla: Function;
// }
//
// class Person extends Test implements IPerson {
//     city: string;
//
//     constructor(name: string, age: number, city: string) {
//         super(name, age);
//         this.city = city;
//     }
//
//     sayBla() {}
//
//     sayName() {
//         console.log('Yo yo yo');
//         super.sayName();
//     }
// }
//
// let somePerson = new Person('Hanna', 25, 'Minsk');
//
// console.log(somePerson)
//
// somePerson.sayName()


// class Helper {
//     sayName() {}
//     sayBye() {}
// }
//
//
// class superHelper extends Helper {
//     sayBla() {}
// }
//
// let testObj = new superHelper();
//
// console.log(testObj);


// class Helper {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayName() {}
//     sayBye() {}
// }
//
//
// class superHelper extends Helper {
//
//     constructor(name: string) {
//         super(name);
//     }
//
//     sayBla(n: string) {}
//
// }
//
// let testObj = new superHelper('Evgen');
//
// console.log(testObj);


// class Test {
//     name: string;
//
//     static staticParam = 10;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     sayName() {
//         console.log(this.name)
//     };
//
//     static someStaticMethod() {
//         console.log(this.staticParam);
//         console.log(this.staticParam);
//
//         return 'TEst';
//     }
//
// }
//
// class Test2 extends Test {
//     static staticParam = 50;
//
//     static someStaticMethod() {
//         return 'SuperTEst';
//     }
// }
//
// let testObj = new Test2('cbvdnv');
//
// console.log(testObj);
// console.log(Test2.staticParam)
// //console.log(Test2.someStaticMethod())
// console.dir(Test2);

// interface IPerson {
//     name: string;
//     age: number;
//     sayName: Function;
// }
//
// class Person implements IPerson {
//
//     private count = 10;
//
//     constructor(public name: string, public age: number) { }
//
//     sayName() {
//         console.log(this.name);
//     }
// }
//
// let evgenObj = new Person('Evgen', 33);
// console.log(evgenObj);
// // @ts-ignore
// console.log(evgenObj.count);
// //evgenObj.sayName();


// class Test {
//     #testParam = 10;
//
//     showPrivateParam() {
//         console.log(this.#testParam);
//     }
// }
//
// let obj = new Test();
// //obj.showPrivateParam();
// console.log(obj.#testParam);




interface IPerson {
    name: string;
    age: number;
    sayName: Function;
}

class Person implements IPerson {

    private count = 0;

    constructor(public name: string, public age: number) { }

    get innerCount() {
        return this.count;
    }

    set innerCount(value) {
        this.count = value * 10;
    }

    sayName() {
        console.log(this.name);
    }
}

let obj = new Person('E', 3);
console.log(obj);
obj.innerCount = 50;
console.log(obj.innerCount);



interface IVehicle{
    isStartEngine:boolean;
    isMoving:boolean;
   // speed:number;
    startEngine: ()=>void;
    stopEngine: ()=>void;
    startMoving: (maxSpeed?:number)=>void;
    stopMoving: ()=>void;
}

class Vehicle implements IVehicle{
    isStartEngine:boolean;
    isMoving:boolean;
    speed:number;
    constructor() {
        this.isStartEngine = false;
        this.isMoving =false;
        this.speed = 0
    }
    startEngine(){
        if(this.isStartEngine){
            console.log('Are u sure? Engine is working now!')
        }else{
            this.isStartEngine = true;
            console.log('engine is working!');
        }
    }
    stopEngine(){
        if(!this.isStartEngine){
            console.log('Hmm...engine is stoped')
        }else if(this.isMoving){
            console.log('It is not goot idea to spot engine while moving!')}
        else{
            this.isStartEngine = false
        }
    }
    startMoving(maxSpeed:number=150){
        if(!this.isStartEngine){
            console.log('Cannot move')
        }else if (this.isMoving){
            console.log('Cannot move')
        } else{
            this.isMoving = true;
            let i = 1;
            while (this.speed<=maxSpeed){
                setTimeout((speed)=>{
                    if(speed>120){
                        console.log(`Whe speed ${speed}! We are moving too fast!`)
                    }else{
                        console.log(`Our speed ${speed}`)
                    }
                },i*1000,this.speed)
                this.speed +=15;
                i++;
            }
            this.speed = maxSpeed;
            setTimeout(()=>console.log(`The speed is ${this.speed}!!! We are going to die`),i*1000)
        }
    }
    stopMoving(){
        if(this.speed===0){
            console.log('We are mot moving!')
        }else{
            let i =1;
            while (this.speed>0){
                setTimeout(speed=>{
                    if (speed>40){
                        console.log(`Please stop! Our speed is ${speed} We are won't to die`)
                    }else{
                        console.log(`speed is ${speed}`)
                    }
                },i*1000,this.speed)
                this.speed -=15;
                i++;
            }
            setTimeout(()=>{
                console.log(`Thw speed is ${this.speed}.We are arrived`)
            },i*1000)
            this.isMoving = false;
        }
    }
    getStatus(){
        console.log(this.isStartEngine)
    }
}

const vehicle = new Vehicle();
//@ts-ignore
window.vehicle = vehicle

class Motorbike extends Vehicle{
    burnOut(){
        if(!this.isStartEngine){
            console.log('Start engine bro!')
        }else{
            console.log('Zoom')
        }
    }
    startMoving() {
        super.startMoving(200);
    }
}

class Car extends Vehicle{
    startMoving() {
        super.startMoving(140);
    }
}
const bike = new Motorbike
bike.startEngine();
bike.burnOut();
bike.startMoving()

const car = new Car
car.startEngine();
car.startMoving()

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.




// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};