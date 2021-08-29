// JS ES6

// let, const

// function Print(object){
//     console.log("Bạn đang học ngôn ngữ", object);
// }

//arrow function có thể viết short hand

// const Sum = (num1, num2) => num1 + num2

// const reuse = Sum(3,5);

// console.log(reuse)

//loop

const cars = ["BMW", "Volvo", "Mini"];

// const moto = ["Kawasaki", 20, {fullname: "haley Davincent"}];


// for (let x of moto) {
//   console.log(x);
// }

//defaut parametor

// const Sum = (num1 = 5, num2 = 10) => num1 + num2

// const reuse = Sum(2,3);

// console.log(reuse)

// map in array

cars.map((x, index) => console.log("ô tô", x, "có index là", index));

// bài tập
// b1:

// Cho một mảng như sau: 
var smartPhones = [
    { name: "iphone", price: 649 },
    { name: "Galaxy S6", price: 576 },
    { name: "Galaxy Note 5", price: 489 }
];
// viết hàm để khi chạy trả về giá của các sản phẩm. dùng map function

let newarr = smartPhones.map(x => {
    return { price: x.price }
});
console.log(newarr);

// b2: Chuyển các function sau sang dạng ES6 (arrow function):

let foo = (x, y, z) => console.log(x, y, z)

function foo() {
    alert("Hello")
}
function foo(a, b) {
    let m = a + b * 100
    return m
}