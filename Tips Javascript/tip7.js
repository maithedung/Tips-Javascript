// 7. Thay thế chuỗi và toàn bộ chuỗi

const string = 'Mai Mai The Dung';

const changeString = string.replace(/ai/, 'ok');
const changeAllString = string.replace(/ai/g, 'ok');

console.log(changeString);
console.log(changeAllString);