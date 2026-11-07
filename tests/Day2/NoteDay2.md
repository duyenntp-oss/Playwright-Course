1\. folder  Test

\- file spec: Chưa logic test, kiểu step, expect

\- File ts: chứa logic, if else, +-\*/



2\. cách chạy file :

\- mở terminal -> nhập node tests( tab)/ tên file cần test

3\. cấu trúc

từ khóa khai báo biến  biến = kiểu dữ lieu data

Biến ( đựng dữ lieu )





**Day2. Cách để gom các thông tin vào 1** 



**1. Object:**

\- Kiểu dữ lieu dạng đối tượng kiểu key value

\- phải định nghĩa kiểu dữ lieu

\- Cách khai báo kiểu dữ lieu :

\+ Dùng từ khóa type

Type A { biến1 : kiểu dữ lieu; biến 2: kiểu dữ liệu}

ví dụ :

&#x20;type duyen1 {

age: 24;

name: "Duyen";

Address: " namdinh"

}

\- Khai báo kiểu dữ lieu xong phải add  kiểu này vào biến đã khai báo

let person: duyen1 

{ age: number;

name:string;

Address:string}

\-> lưu ý : dữ lieu khai báo phải khớp với kiểu dữ lieu đã khai báo







\- let trước type hoặc type trước let đều được

=> object: 1 đối tượng có nhiều thuộc tính -> thì dung object



**1.2. cách in thông tin trong 1 object**

console.log ( biến lớn được khai báo trong let. biến con cần in)

ví dụ : console.log (person.name);

\-> sử dung trrong trường hợp chỉ muốn lấy 1 vài thông tin trong 1 object



**1.3 : có 2 cách để khai báo kiểu dữ lieu : type / Interface**

Khác nhau :

\- Cách khai báo : interface không có dấu =, còn type thì có dấu bang

\- interface: tự động merch type vào nhau

\- type: định nghĩa được kiểu dữ lieu truyền vào

ví dụ : type Duyen = "a"|"b";

let Duyen : string ="c"; 

=> sẽ báo lỗi vì Duyen chỉ được nhận a hoặc b đã khai báo

**1.4 : Optional: biến nào không bắt buộc thì gắn them dấu hỏi chấm vào cuối** 

ví dụ :

type Duyen = {

name : string;

age:number;

address?: string}



const duyen1 :Duyen = {

name :"Duyen",

age:24,

address:"Nam Dinh"}



const duyen2: Duyen = {

name :"Duyen",

age:24}

khi này tại duyen2 sẽ báo lỗi vì không có biến address do bên trên type khai báo address là bắt buộc có

do đó để k xảy ra báo lỗi, trên type sẽ thêm dấu ? vào biến address-> hệ thông tự hiểu là address k bắt buộc





**2.Array - Kiểu dữ liệu - tạo , thêm, truy vấn phần tử**


\-mảng chứa nhiều giá trị nhưng cùng kiểu dữ liệu
\- là mảng chứa nhiều chuỗi, nhiều number và nhiểu object

\- đựng được nhiều giá trị hơn

\- phải có kiểu dữ liệu 

\- dùng để lưu nhiều giá trị vào cùng 1 biến

\- có thể chứa biến đơn hoặc object

ví dụ :

let class: string\[] = \["class1","class2"] - biến đơn

\+ object:

type class = {

tenLop:string;

malop:number

}



let lop1 = {

tenLop:"lop1";

malop:A

}

let lop2 = {

tenLop:"lop2";

malop:B

}

let allLop: class\[] = \[lop1,lop2];

\-index 1 mảng bắt đầu từ số 0

\-lấy giá trị trong mảng:



ví dụ :

const class:string\[]=\["lop1","lop2","lop3"];

console.log (lop\[0]);

\-> ***biến > index> thuộc tính*** : console.log(Alltransactions\[0].amount);





**3.Hàm filter, map**

**3.1 Filter- Lọc mảng -> trả về mảng khác** 

\-dùng khi có 1 mảng nhưng muốn kiểm tra xem mảng đó có chứa giá trị cần tìm không, trong khi ng dùng không biết mảng đó như nào -> khi filter nếu có sẽ hiển thị ra giá trị đó, nếu k có trong mảng thì trả về mảng rỗng

ví dụ: let class: string\[] = \["class1","class2"]



let isHaveClass1 = class.filter(name => name ==="class1");

console.log(isHaveClass1);



**3.2 Map - hàm biến đổi data**

\- biến đổi 1 mảng thành mảng khác

ví dụ: let class: string\[] = \["class1","class2"]



let isHaveClass1 = class.map(name = > name.toUpperCase());

console.log(isHaveClass1);

\-dùng map khi muốn đổi giá trị A sang giá trị B

ví dụ: let class: string\[] = \["class1","class2"]



let isHaveClass1 = class.map(name => 

{if (name ==="class1"){

return "class3"}

return name

});

console.log(isHaveClass1);





