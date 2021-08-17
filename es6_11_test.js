'use strict';

// ==== shorthand property names
const firstObj = {
    first: "111",
    second: "222"
};
console.log('first=>', firstObj);

const myName = "11";
const email = "22";

const secondObj = {
    myName,
    email
};
console.error('second=>', secondObj);

// ==== destructuring assignment
const student = {
    yourName: 'anna',
    level: 1
};
const {yourName, level} = student;
console.log(`${yourName}  ${level}`);

// need to another name ?
const {yourName: studentName, level: studentLevel} = student;
console.log(`${studentName}  ${studentLevel}`);

// Array도 쌉가능
const animals = [ '1', '2', '3'];
const [num1, num2, num3] = animals;
console.log(`${num1} ${num2} ${num3}`);

// ==== spread syntax, 첫번째 참조 값만 복사됨 (object인 경우 object의 주소)
const obj1 = { key: '111'};
const obj2 = { key: '222'};
const objArr = [obj1, obj2];
const copyedArr = [...objArr];
// copy array address not value..
const copyedArr2 = [...objArr, { key: '333'}];
obj1.key = '3333'; // all obj1.key is chaned.
console.log(objArr, copyedArr);
console.log(copyedArr2);

// copy ojbect
const copyObj = { ...obj2};
console.log('>>>>',copyObj);

// merge all array
const mergedArr = [ ...copyedArr, ...copyedArr2];
console.log(mergedArr);

// === default parameters
const needParamFunction = (first_param = `default value...`) => { // set default param...
    console.log(first_param);
}
needParamFunction(`parma exist...`);
needParamFunction(); // use default

// ===== ternary operator
const testTernaryOp = (is_param) => {
    const someValue = is_param ? `start` : `end`;
    console.log(someValue);
}
testTernaryOp(`gkgkgkgk`);  // start
testTernaryOp();  // end

// template literals
const test_one = `blablabla`;
const test_two = `it's sleepy`;
const someLiterals = `hey, ${test_one} ${test_two}`;
console.log(someLiterals);

// ES11, Optional chaining
const person = {
    job : {
        manager : {
            name : `doctorA`
        }
    }
};
const person2 = {
    name : `I am person`
};
console.log(person.job?.manager?.name);
console.log(person2.job?.manager?.name);

// nullish coalescing operation
//const nameVale = '';
//const nameVale = 0;
const nameVale = undefined;
const userName = nameVale || 'Guest';
console.log(userName); // all values are Guest

// undefined 만 체트하는 경우임..
//const nameVale2 = '';
//const nameVale2 = 0;
//const nameVale2 = undefined;
const nameVale2 = null;  // undefined & null checking..
const userName2 = nameVale2 ?? 'Guest2';
console.log(userName2); // undefined만 값이 없음





