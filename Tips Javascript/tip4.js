// 4. Đặt giá trị mặc định sử dụng toán tử ||

class User {
    constructor(name, age) {
        this.name = name || 'Mai The Dung';
        this.age = age || 18;
    }
}

const user1 = new User();
const user2 = new User('Dung');
const user3 = new User(0, 37);


console.log(user1);
console.log(user2);
console.log(user3);

