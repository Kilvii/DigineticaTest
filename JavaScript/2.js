//Task: Дано выражение:
var a = {b: 1};
var b = a;
b.b = 2;
console.log(a)
//Question: Что будет выведено в консоли? Почему был получен такой результат?
//Answer : {b: 2} Из-за ссылки на один и тот же объект