let buttonSignIn = document.querySelector(".signIn");
let emailInput = document.querySelector(".emailInput");
let passwordInput = document.querySelector(".passwordInput");

let loginForm = document.querySelector(".container");
let phoneBook = document.querySelector(".container2");

let inputAddNameContact = document.querySelector("#addname");
let inputAddNumberContact = document.querySelector("#addphone");
let buttonAddContact = document.querySelector("#buttonaddcontact");

let tableContact = document.querySelector("#tableContact")

let arrContact = [
    {
        name: "MindX",
        phone: "09876554"
    },
    {
        name: "Hanoi",
        phone: "0387787"
    }
];

phoneBook.style.display = "none";

buttonSignIn.addEventListener("click", function (e) {
    if (emailInput.value == "admin" && passwordInput.value == "admin") {
        alert("đăng nhập thành công");
        loginForm.style.display = "none";
        phoneBook.style.display = "flex";
    }
})

buttonAddContact.addEventListener("click", function (e) {
    arrContact.push({
        name: inputAddNameContact.value,
        phoneNumber: inputAddNumberContact.value
    });
    //addcontact

})

arrContact.map(function (contactInfo, index) {
    let contactString = `
    <td>${index + 1}</td>
    <td>${contactInfo.name}</td>
    <td>${contactInfo.phone}</td>
    <td>
        <button type="button" class="btn btn-success">edit</button>
        <button type="button" class="btn btn-danger">delete</button>
    </td>
`
    let contactHTML = document.createElement("tr");
    console.log(contactHTML);
    contactHTML.innerHTML = contactString;
    console.log(contactHTML);
    tableContact.appendChild(contactHTML);
})