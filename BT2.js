let staff = {
    id: 1,
    name: "Duc Anh",
    phone: "033",
    address:{
        street:"Láng",
        city:"Hà Nội"
    }
}
let Name = prompt("Nhập tên:");
let Phone = prompt("Nhập sđt");
let Email = prompt("Nhập email");
staff.name = Name;
staff.phone = Phone;
delete staff.address;
staff.email = Email;
console.log(staff);