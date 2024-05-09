let user = [];
let Name = prompt("Nhập tên:");
while (Name == "" || Name.length <= 3) {
  Name = prompt("Nhập tên:");
}
let Email = prompt("Nhập email");
while (Email == "" || IsInvalidEmail(Email) == false) {
  Email = prompt("Nhập lại email");
}
let Password = prompt("Nhập password");
while (Password == "" || Password.length <= 7) {
  Password = prompt("Nhập lại password");
}

  let fake = {};
  fake.name = Name;
  fake.email = Email;
  fake.pass = Password;
  user.push(fake);
function IsInvalidEmail(the_email) {
  var at = the_email.indexOf("@");
  var dot = the_email.lastIndexOf(".");
  var space = the_email.indexOf(" ");

  if (
    at != -1 && //có ký tự @
    at != 0 && //ký tự @ không nằm ở vị trí đầu
    dot != -1 && //có ký tự .
    dot > at + 1 &&
    dot < the_email.length - 1 && //phải có ký tự nằm giữa @ và . cuối cùng
    space == -1
  ) {
    return true;
  } else {
    alert("Email Nhập không hợp lệ");
    return false;
  }
}
console.log(user);
