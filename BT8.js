// let user = [];
// //Nhập vào tạo tk
// function firstDo() {
//   let Name = prompt("Nhập tên:");
//   while (Name == "" || Name.length <= 3) {
//     Name = prompt("Nhập lại tên:");
//   }
//   let Email = prompt("Nhập email");
//   while (Email == "" || IsInvalidEmail(Email) == false) {
//     Email = prompt("Nhập lại email");
//   }
//   let Password = prompt("Nhập password");
//   while (Password == "" || Password.length <= 7) {
//     Password = prompt("Nhập lại password");
//   }

//   let fake = {};
//   fake.name = Name;
//   fake.email = Email;
//   fake.pass = Password;
//   user.push(fake);
//   alert("Tạo thành công");
// }
// //đăng nhập
// function LogIn() {
//    let Email= prompt("Nhập email đăng nhập");
//    let pass=  prompt("Nhập mk đăng nhập");
//    CheckEl(Email,pass);
//    alert("Nhập thành công");
// }
// //check
// function CheckEl(email,pass) {
//   const find = user.find((Book) => Book.email === email || Book.Password === pass);
//   while (find==undefined) {
//     console.log(`Tài khoản mk sai`);
//     LogIn();
//     break;
//   }
// }

// //người dùng
// let userInput = prompt("Bạn muốn đăng nhập hay tạo tk chọn C/F");
// if(userInput=="c"){
//     firstDo();
//     LogIn();
// }
// else if (userInput=="f") {
//     LogIn();
// }
// else{
//     alert("Nhập không đúng");
// }
// function IsInvalidEmail(the_email) {
//   var at = the_email.indexOf("@");
//   var dot = the_email.lastIndexOf(".");
//   var space = the_email.indexOf(" ");

//   if (
//     at != -1 && //có ký tự @
//     at != 0 && //ký tự @ không nằm ở vị trí đầu
//     dot != -1 && //có ký tự .
//     dot > at + 1 &&
//     dot < the_email.length - 1 && //phải có ký tự nằm giữa @ và . cuối cùng
//     space == -1
//   ) {
//     return true;
//   } else {
//     alert("Email Nhập không hợp lệ");
//     return false;
//   }
// }
// console.log(user);



const users = [];

let choose
do {
    choose = prompt(
        `
            1. R: Register
            2. L: Login
            3. E: Exit
        `
    )
    choose = choose.toLowerCase();
    switch (choose) {
        case "r":
            register()
            break
        case "l":
            login()
            break
        case "e":
            console.log(users)
            break
    }
} while (choose.toLowerCase() !== "e");

function register() {
    let id = 1
    if (users.length > 0) {
        id = users[users.length - 1].id + 1
    }
    const user = {
        id,
        name: "",
        email: "",
        password: ""
    }
    let name, email, password

    do {
        name = prompt("Enter name register: ")
    } while (!isNaN(name) || name.length < 3)

    do {
        email = prompt("Enter email register: ")
    } while (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email))

    do {
        password = prompt("Enter password register: ")
    } while (password.length < 8)

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}

function login() {
    let emailLogin, passwordLogin
    emailLogin = prompt("Enter email login: ")
    passwordLogin = prompt("Enter password login: ")

    const findUser = users.find(user =>
        user.email === emailLogin && user.password === passwordLogin
    )

    if (!findUser) {
        console.log("Fail");
    } else {
        console.log("Success");
    }
}