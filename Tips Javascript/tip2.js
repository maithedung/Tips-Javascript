// 2. Chuyển đổi kiểu dữ liệu sang number sử dụng toán tử +

// Thủ thuật này rất tuyệt vời và dễ dàng để thực hiện, nhưng nó chỉ hoạt động với chuỗi những con số, ngược lại nó sẽ trả về NaN (Not a Number)

const toNumber = (stringNumber) => +stringNumber;

console.log(toNumber('1234'));
console.log(toNumber('5q'));