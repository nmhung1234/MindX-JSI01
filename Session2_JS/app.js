// var, cosnt, let

// for, while, do while, for/in, for/of

// b1: 1 function tính diện tích của hình tròn, vuông, tam giác;

// b2:  biến dổi array:

let array = [
    {
        name: "Bob",
        age: 15,
        add: "Ha Noi"
    },
    {
        name: "Alice",
        age: 20,
        add: "HCM"
    },
    {
        name: "Mile",
        age: 18,
        add: "Ha Giang"
    },
]
// cach1: dùng map
array.map(function (elem) {
    console.log(elem);
})

// cach2: dung for
// for (let i = 0; i < array.length; i++) {

//     array[i]

// }



// kết quả mong muốn: sửa add = add + "city", Ha Noi ->  Ha Noi city


// function calculateSquare(size){
//     console.log(size*size)
// }

// let calculateSquare = (size) => console.log(size*size);
