//es5

// <!-- var name = 'vasya';
// var age = 20;
//у var область видимости глобальная, ее ограничивает либо фун-ция либо ничего -->

// let name = 'Vasya';
// const age = 20;
// // age = []
// console.log(age);


//es6
// let name = 'Vasya';
// const age = 20;
// const SOME_CONSTANT = 20;

// // age = []
// console.log(age);





// //es5
// function passTest(result) {
//     // var firstName;
//     // var yearOfBirth;

//     // if (result) {
//     //     firstName = 'Vasya';
//     //     yearOfBirth = 1990;
//     // }



//     if (result) {
//         var firstName = 'Vasya';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + "рожденный в " + yearOfBirth + " сдал тест!");
// }

// passTest(result:true);
// //две аналогичные записи ф-ции, вар всплывает до самого верхнего уровня текущей видимости







// //es6
// function passTest(result) {

//     if (result) {
//         let firstName = 'Vasya';
//         let yearOfBirth = 1990;
//     }
//     console.log(firstName + "рожденный в " + yearOfBirth + " сдал тест!");
// }

// passTest(result:true);
// //здесь переменная неопределена(firstName is not defined), потому что let надо выносить выше,
// //здесь каждый блок фигурных скобок свой scope(область видимости), чтобы let было определенно нужно их вынести на уровень выше в тот же скоуп где и консоль,
// //там где сейчас let это локальный скоуп и консоль.лог их не видит. Пример =>

// function passTest(result) {
//     let firstName;
//     let yearOfBirth;

//     if (result) {
//         firstName = 'Vasya';
//         yearOfBirth = 1990;
//     }
//     console.log(firstName + "рожденный в " + yearOfBirth + " сдал тест!");
// }

// passTest(result: true);
// // если false то будет undefined




// console.log(a); //будет undefined

// {
//     var a = 1;
// }

// console.log(a); //все норм


// console.log(a);

// {
//     let a = 1;
// }

// console.log(a); //переменная в области видимости не объявленна, консоль.лог должен быть внутри блока, у лэт блочная область видимости




// //es5
//     var i = 23;

//     for (var i = 0; i < 5; i++){
//         console.log(i);  //0,1,2,3,4 (повторно инициализируем переменную и обновляем i на 0//)
//     }

//     console.log(i);//5



// //es6
// let i = 23;

// for (let i = 0; i < 5; i++) {
//     console.log(i); // 0,1,2,3,4
// }
// console.log(i); //23



// function a() {
//     var b = 5;
//     let c = 10;
//     d = 20;
// }

// a();
// console.log(b); // b is not defined (область видимости у вар огранич. функцией, чтобы увидеть нужно консоль написать в фун-ции)
// console.log(c); // c is not defined (область видимости огранич блоком, так же нужно в фун-цию написать консоль)
// console.log(d); // 20 ( но так лучше не делать, в строгом режиме так нельзя)



//шаблонные строки

//es5

    // var firstName = "John";
    // var lastName = "Smith";
    // var yearOfBirth = 1990;

    // function calcAge(year) {
    //     return 2021 - year;
    // }

    // console.log(firstName + " " + lastName + " рожден в " + yearOfBirth + "." + " Ему сейчас " + calcAge(yearOfBirth));
    // // так неудобно

    //ПРИМЕР =>

//     //es6
// var firstName = "John";
// var lastName = "Smith";
// // var yearOfBirth = 1990;

// // function calcAge(year) {
// //     return 2021 - year;
// // }

// // alert(`${firstName} ${lastName} рожден в ${yearOfBirth}, Ему сейчас ${calcAge(yearOfBirth)}`);



// const str = `${firstName} ${lastName}`;
// console.log(str.startsWith('J'));   // этим методом можно проверить начало строки
// console.log(str.endsWith('th'));    // проверка конца строки
// console.log(str.includes(' n S'))    // проверка строки в любом месте
// console.log(`${str} ` .repeat(count: 5));  //метод повторяет вывод строки определенное количество раз




//Стрелочные функции  (Arrow Functions)

// const calcAge = () => {  //вместо function () пишем () =>
//     return 6;
// }

// console.log(calcAge());


//объявление параметра ф-ции
// const calcAge = (x) => {  //вместо function () пишем () =>
//     return 6 - x;
// }

// console.log(calcAge(x: 3));   //3


// //упрощение ф-ции
// const calcAge = x => 6 - x;    //можно опустить круглые скобки (),
//        // если ф-ция что-то возвращает(return) мы можем опустить фигурн.скобки {} и return

// console.log(calcAge(x: 3));   //3



// // больше 1го параметра
// const calcAge = (x, y = 10) => {  //либо в параметре(x, y), а console.log(1, 10) 
//     return 6 - x + y;
    
// }

// console.log(calcAge(1));   //если параметр передан в условии (y = 10), то в консоли можно его не писать

//es5
var box = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.getElementsByClassName('green')[0]
        .addEventListener('click', function () {
            console.log(this);
            console.log('This is box number ' + this.position + ' and color ' + this.color);
        });
    }
}

box.clickMe();