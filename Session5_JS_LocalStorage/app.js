// //localStorage;
// let arrPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let objPeople = {name: "MindX", city: "HN-HCM"};
// //cú pháp localStorage:

localStorage.setItem("arr", JSON.stringify(arrPeople));
// localStorage.setItem("obj", JSON.stringify(objPeople));

let arr = localStorage.getItem("arr");
// let arrParsed = JSON.parse(arr);

// console.log(arrParsed);



// arrParsed.map((elem) => console.log(elem))


localStorage.removeItem("arr");
localStorage.clear();


// JSON là 1 dạng lưu trữ dữ dữ liệu dưới dạng là key: value
