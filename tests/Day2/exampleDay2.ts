let name1:string="duyen";
let name2:string='abc';
let age:number= 24;
console.log(name1, name2);
//-----
// Khai báo 1 transaction gồm các thông tin : amount, PTTT, customerName
// let transaction = {
//     amount:123456789,
//     paymentMethod: 'International',
//     customerName:"Duyen",
//     Createdate: "01/12/2002"

// }
// type Duyen1 = {
// amount:number;
// paymentMethod:string;
// customerName:string;
// Createdate:string;
// }
// console.log("Thông tin giao dịch của khách hàng " 
//     + transaction.customerName + " với số tiền " 
//     + transaction.amount +" bằng phương thức "
//     + transaction.paymentMethod + " vào ngày " 
//     + transaction.Createdate);
//cần thêm transaction. trước mỗi thuộc tính vì các thuộc tính amount, paymentMethod, customerName thuộc về đối tượng transaction, chứ không phải là các biến độc lập.
//---
// type Duyen = {
// name : string;
// age:number;
// address?: string}

// const duyen1 :Duyen = {
// name :"Duyen",
// age:24,
// address:"Nam Dinh"}

// const duyen2: Duyen = {
// name :"Duyen",
// age:24}

// array
//list transaction : 2 trans, nheieuf thông tin và có type
// type Transaction = {
//     amount:number;
//     paymentMethod:string;
//     customerName:string;
//     Createdate:string;    }

// let Alltransactions: Transaction[] = [
//     {//ọpect1
//         amount: 123456789,
//         paymentMethod: "International",
//         customerName: "Duyen",
//         Createdate: "01/12/2002"
//     },
//     {//object2
//         amount: 987654321,
//         paymentMethod: "Domestic",
//         customerName: "John",
//         Createdate: "02/12/2002"
//     }
// ];

// console.log(Alltransactions);
// //cách láy 1 giá trị trong mảng
// // const classes : string[]=["lop1","lop2","lop3"];
// // console.log (classes[0]);
// //lấy amount của transaction1
// console.log(Alltransactions[0].amount);

//  let classes: string[] = ["class1","class2"]

// let isHaveClass1 = classes.filter(name => name ==="class3");
// console.log(isHaveClass1);
let classes: string[] = ["class1","class2"]

let isHaveClass1 = classes.map(name => 
{if (name ==="class1"){
return "class3"}
return name
});
console.log(isHaveClass1);
