//Написать регулярное выражение, совпадающее с числом с плавающей точкой с точностью до 3 знака после запятой.
let floatReg = RegExp(/^-?\d+(\.\d{1,3})$/);

const validFloat = '123.456';
const invalidFloat = '123.4672';
const invalidInt = '123';

console.log(floatReg.test(validFloat)); // true
console.log(floatReg.test(invalidFloat)); // false
console.log(floatReg.test(invalidInt)); // false

//Описание регулярного выражения:
//    ^ : Начало строки.
//    -? : Необязательный знак минуса.
//    \d+ : Одна или более цифр.
//    (\.\d{1,3}) : Группа, содержащая точку и от 1 до 3 цифр после нее.
//    $ : Конец строки.