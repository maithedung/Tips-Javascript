// 1. Chuyển đổi kiểu dữ liệu sang boolean sử dụng toán tử !!
// !! (toán tử phủ định đôi), tự động chuyển đổi moị kiểu sang kiểu boolean.
// trả về false khi có giá trị: 0, null, '', "", undefined, NaN
// còn lại trả về true

class Account {
    constructor(cash) {
        this.cash = cash;
        this.hasMoney = !!cash;
    }
}

const account1 = new Account(0);
const account2 = new Account('');
const account3 = new Account(5.4)

console.log(account1);
console.log(account2);
console.log(account3);