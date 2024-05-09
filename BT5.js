let num= +prompt("Nhập số lượng thành viên muốn nhập");
let Book= [];
for (let i = 0; i < num; i++) {
    let fake = {}
    fake.name = prompt("Nhập tác phẩm");
    fake.author= prompt("Nhập tác giả")
    Book.push(fake)
}

let check = prompt("Nhập tên tác giả mà bạn muốn check:");
// let flag = false;
// for (const index in Book) {
//     if (check == Book[index].author) {
//         flag=true;
//     }
// }
// if (flag==true) {
//     console.log(`Có tác giả tên: ${check}`);
// }
// else{
//     console.log(`Không có tác giả tên: ${check}`);
// }

//cách 2
const find = Book.find(Book => Book.author ===check);
if (find==undefined) {
    console.log(`Không có tác giả tên: ${check}`);
}
else{
    console.log(`Có tác giả tên: ${check}`);
}