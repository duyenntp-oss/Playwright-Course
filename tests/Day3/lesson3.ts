// let gender: string ="female";
// if (gender === "male"){
//     console.log("con trai nè");
// }
// else if (gender === "female"){
//     console.log("Con gái nè");
// }
// else{
//     console.log("giới tính khác");
// }

// //
// let Day :string = 'Monday';
// if(Day == "Monday"){
//  console.log ("thứ 2 là ngày đầu tuần ");
// }
// else if(Day === "tuesday"){
// console.log ("thứ 3");
// }
// else if(Day === "Wednesday"){
//     console.log ("thứ 4 ");
// }
// else if(Day === "Thursday"){
//     console.log ("thứ 5");
// }
// else if(Day === "friday"){
//      console.log ("Thứ 6");
// }
// else if(Day === "Saturday"){
//     console.log ("Thứ 7");
    
// }
// else {
//     console.log ("chủ nhật");
// }
// // if else chỉ dùng khi ít ddieuf kiên
// //do đó dùng sang switch case
// switch (Day){
//     case"Monday":
//         console.log("Thứ 2");
//         break;
//     case"Tuesday":
//         console.log("thứ 3");
//         break;

//     case"wednesday":
//         console.log("thứ 4");
//         break;
// }
// dấu / chia lấy phần nguyên, dấu % chia lấy phần dư
// let so:number = 5;
// if (so%2 === 0){
//     console.log("số chẵn");
// }
// else {
//     console.log ("số lẻ");
// }

// let paymentMethods:string[]=["QT","NĐ","QR","VietQR"]
// // for (let i=0;i<=3;i++){
// //     console.log(paymentMethods[i]);
// // }
// // //không fix cứng số lượng thì dùng length
// // for (let i=0;i<= paymentMethods.length;i++){
// //     console.log(paymentMethods[i]);
// // }

// for (let i=paymentMethods.length-1;i>=0 ;i--){
//     console.log(paymentMethods[i]);
// }

let arrNumber :number[]=[2,5,6,8,9,11];
    for (let i = 0; i<= arrNumber.length-1; i++){
if (arrNumber[i] %2 === 0)
    {
        console.log("Số chẵn là " + arrNumber[i]);
    }

else {
    console.log("Số lẻ là " + arrNumber[i]);
}}