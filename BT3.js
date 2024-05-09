let stu = [
  
];
let num= +prompt("Nhập số lượng thành viên muốn nhập");
let Name="";
for (let i = 0; i < num; i++) {
    let fake = {}
    fake.id = i+1;
    fake.name = prompt(`Nhập tên của ${i+1} là:`);
    stu.push(fake)
}
let school =[];
school.push(stu);
console.log(stu);
console.log(school);
