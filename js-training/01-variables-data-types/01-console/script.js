// console.log(100);
// console.log('Hiiiiiiiiii1!!!!!!!');
// console.log(20, 'Hello', true);
//const x = 100;
//console.log(x);
//console.error('Alert');
//console.warn("Warning");
//console.table({name: 'Jhon', email: 'brad@gmail.com'});
//console.group('simple');
//console.error('Alert');
//console.warn("Warning");
//console.table({name: 'Jhon', email: 'brad@gmail.com'});
//console.groupEnd();


//const firstName = "david"
//const age = 20;
//const temp = 14.10;

//const hasKids = false;
//const aptNumber = null;

//const output = aptNumber; 
//console.log(output, typeof output);

//let name = "Jhon";

//let age = 30;

//let person = { 
//    name: 'Brad',
//    age: "40"
//}
//let newName = name;
//newName = 'Jonathan';
//let newPerson = person; 
//newPerson.name = 'Bradley';

//console.log(person.name)


//let x; 

//const name = 'jhon'
//const age = 30;


//x = 'Hello, my name is ' + name + ' and i am ' + age + ' years old' 

//x = `Hello, my name is ${name} and i am ${age} years old`

//const s = new String('Hello world');

//x = s [1];
 

//x = s.length;

//console.log(x);
//const string = 'learning';

//let newString = `${string.charAt(0).toUpperCase()}${string.slice(-7)}`;
//newString = string[0].toUpperCase() + string.substring(1);

//console.log(newString);


//let x;

//const num = new Number(5);

//x = num.toString();
//x = num.toString().length;
//x = num.toFixed(5);
//x = num.toPrecision(2);
//x = num.toExponential(5);
//x = num.toLocaleString("ar-EG");
//x = num.valueOf();

//console.log(x);



//let x;

//x = Math.sqrt(9);
//x = Math.abs(5);
//x = Math.round(4.3);
//x = Math.ceil(4.2);
//x = Math.floor(4.9);
//x = Math.pow(2,3);
//x = Math.min(4, 5 , 3); 
//x = Math.max(4, 5 , 3); 
//x = Math.random();
//x = Math.floor(Math.random() * 10 + 1);

//console.log(x);

//let x = Math.floor(Math.random() * 100);
//let y = Math.floor(Math.random() * 50);

//let sum;
//let difference;
//let product;
//let quotient;
//let rm;

//sum = x + y; 
//difference =  x - y;
//product = x * y;
//quotient = x / y;
//rm = x % y;


//let quotientOutput = quotient
//let differenceOutput = difference;
//let sumOutput = sum
//let rmoutput = rm
//let productOutput = product

//console.log(x + y, x - y, x * y, x / y, x % y)
//console.log(x + y);
//console.log(differenceOutput);
//console.log(productOutput);
//console.log(quotientOutput);
//console.log(rmoutput);



//let d;

//d = new Date();
//d = new Date(2021, 0, 10, 12, 30, 0);
//d = new Date('2021-07-10');
//d = Date.now()
//d = new Date('07-10-2022 12:30:00');
//d = d.getTime();
//d = d.valueOf();
//d = new Date();
//d = Math.floor(Date.now() / 1000);

//console.log(d);


//let x;
//let d = new Date();

//x = d.toString();
//x = d.getTime();
//x = d.valueOf();
//x = d.getFullYear();
//x = d.getMonth();
//x = d.getMonth() + 1;
//x = d.getDate();
//x = d.getDay();
//x = d.getHours();
//x = d.getMinutes();
//x = d.getSeconds();
//x = d.getMilliseconds();
//x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
//x = Intl.DateTimeFormat('en-US').format(d);
//x = Intl.DateTimeFormat('default', { month: 'long'}).format(d);
//x = d.toLocaleString('default', { month: 'short'});

//console.log(x)

//let x;
//const numbers = [1, 2, 3, 4, 5, 6, 7];
//const mixed = [12, 'hii', true, null];
//const fruits = new Array('apple', 'watermelon', 'melon', 'banana', 'watermelon');

//x = numbers[0];
//x = numbers[0] + numbers[3];
//x = `My favorite fruit is ${fruits[2]}`
//x = numbers.length;
//fruits[2] = 'pear';
//fruits[3] = 'strawberry';
//x = fruits;


//console.log(x);

//let x;

//const arr = [34, 55, 95, 20, 15];
//arr.push(100);
//arr.pop();
//arr.unshift(99);
//arr.shift();
//arr.reverse();

//x = arr.includes(20);
//x = arr.indexOf(34);
//x = arr.slice(1)
//x = arr.splice(4);
//x = arr.splice(1, 4).reverse().toString().charAt(0);

//console.log(x);

//let x;
//const fruits = ['apple', 'pear', 'orange'];
//const berries = ['strawberry','blueberry', 'rasberry'];
//fruits.push(berries);
//x =  fruits[2];
//const allfruits = [fruits, berries];
//x = allfruits[0][2];
//x = fruits.concat(berries); 
//x = [...fruits, ...berries];
//const arr = [1,2,[3,4],5,[6,7],8]
//x = arr.flat();
//x = Array.isArray('Hello');
//x = Array.from('12345');
//const a = 1;
//const b = 2; 
//const c = 3;
//x = Array.of(a,b,c)

//------------------------------------
//let x;
//const arr = [1, 2, 3, 4, 5];
//arr.push(6);
//arr.unshift(0);
//arr.reverse();
//console.log(arr);
//------------------------------------

//------------------------------------
//const arr1 = [1, 2, 3, 4, 5];
//const arr2 = [5, 6, 7, 8, 9, 10];
//let arr3 = [...arr1.splice(0,3), ...arr2];
//console.log(arr3);
//------------------------------------

/* const library = [
    {
        title: 'A Title Here',
        author: 'A author',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Second Title',
        author: 'Second Author',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Third title',
        author: 'Third Author',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];
console.log(library);
*/









