# 0. Biến là gì?
- Hiểu đơn giản giống như 1 cái hộp bên trong chứa dữ liệu
- Khi dùng thì gọi đến biến
- Khi cần sửa thì chỉ cần sửa ở 1 chỗ

# 1. Từ khoá khai báo biến
- let: biến có giá trị thay đổi
Dùng let khi giá trị thay đổi trong quá trình test

```
let sum = 0;
```

- const: Hằng số
```
 Dùng const khi giá trị không đổi trong suốt test case
const a = "https://www.google.com/";
```

# 2. Cách khai báo biến
- Dạng camelCase

```
const myName = "Duyen";
```

# 3. Kiểu dữ liệu: định nghĩa xem biến sẽ được nhận loại gì
- number: số
- string: chuỗi
- boolean: chỉ gồm 2 giá trị true và false
```
const a: string = "Duyen";
let b: number = 5;
const isLocked = false;
```

# 4. Toán tử: lớn hơn , nhỏ hơn, bằng, nhân, chia, cộng, trừ, chia phần dư, chia phần nguyên
## 4.1 Toán tử so sánh: =, !=, , <, >, <=, >=
Chủ yếu là == (chỉ so sánh giá trị) và === (so sánh giá trị và kiểu dữ liệu)
-> ưu tiên sử dụng ===
```
let a = 1;
let b = "1";
```

## 4.2 Toán tử chia lấy phần nguyên (/), chia lấy phần dư (%)

```
let a: number = 11;
let b:number = 2;
let chiaNguyen = a / b;
let chiaDu = a % b;
console.log(chiaNguyen, chiaDu);
```

## 4.3 Toán tử logic: && (và) tất cả phải đúng, || (hoặc) chỉ cần 1 cái đúng, !(not - đảo ngược)
- && (và): tất cả phải đúng
- || (hoặc): chỉ cần 1 cái đúng
- ! (NOT): đảo ngược

```
const a: boolean = true;
const b: boolean = false
const c: boolean = true;

const abc = a && b && c; //false
console.log(abc);
```