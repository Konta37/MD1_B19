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
let Street = prompt("Nhập đường");
let City = prompt("Nhập thành phố");
staff.name = Name;
staff.phone = Phone;
staff.address.street = Street;
staff.address.city = City;
console.log(staff);