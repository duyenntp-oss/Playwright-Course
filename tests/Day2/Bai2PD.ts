/*
Bài 3: Trong folder lesson2 tạo file bai2.ts

 Cho 1 mảng các giao dịch

| transactionId | amount | currency | status |
| --- | --- | --- | --- |
| TXN001 | 500000 | VND | SUCCESS |
| TXN002 | 1500000 | VND | PENDING |
| TXN003 | 50000 | VND | FAILED |
| TXN004 | 2500000 | VND | SUCCESS |
| TXN005 | 0 | USD | SUCCESS |
- Khai báo mảng giao dịch + type
- Sử dụng console.log → in ra
    - Số lượng giao dịch
    - Giao dịch đầu tiên
    - Mã giao dịch thứ 3
    - Trạng thái của giao dịch cuối
    - Tổng tiền của giao dịch 1 và giao dịch 2*/

    type Transaction = {
        transactionId: string;
        amount: number;
        currency: string;
        status: string;
    }
    let transactions: Transaction[] = [
        {
            transactionId: "TXN001",
            amount: 500000,
            currency: "VND",
            status: "SUCCESS"
        },
        {

            transactionId: "TXN002",
            amount: 1500000,
            currency: "VND",            
             status: "PENDING"  
        },
         {

            transactionId: "TXN003",
            amount: 50000,
            currency: "VND",            
             status: "FAILED"  
        },
        { transactionId: "TXN004",
            amount: 2500000,
            currency: "VND",            
             status: "SUCCESS"
        },
        { transactionId: "TXN005",
            amount: 0,
            currency: "USD",            
             status: "SUCCESS"
        }
    ];
    console.log("Số lượng giao dịch: " + transactions.length);
console.log ("giao dịch đầu tiên là ", transactions[0]);
console.log ("mã giao dịch thứ 3 là ", transactions[2].transactionId);
console.log ("trạng thái của giao dịch cuối là ", transactions[4].status);
console.log ("tổng tiền của giao dịch 1 và giao dịch 2 là ", transactions[0].amount + transactions[1].amount);

/*Bài 4: Vẫn sử dụng mảng giao dịch phía trên

- `map` lấy danh sách mã giao dịch → `["TXN001", ..., "TXN005"]`
- `filter` lấy các giao dịch `SUCCESS`
- Sử dụng cả `filter` và `map` để lấy ID của các giao dịch SUCCESS và có `currency === "VND"` → `["TXN001", "TXN004"]`
- Lấy giao dịch FAILED đầu tiên bằng `filter(...)`rồi in `transactionId` của nó → TXN003 */

let transactionIds =transactions.map(Duyen1 => Duyen1.transactionId);
console.log("Danh sách mã giao dịch: ", transactionIds);
let successTransactions = transactions.filter(Duyen2 => Duyen2.status === "SUCCESS");
console.log("Các giao dịch SUCCESS: ", successTransactions);

let successVNDTransactions = transactions.filter(Duyen3 => Duyen3.status === "SUCCESS" && Duyen3.currency === "VND").map(Duyen4 => Duyen4.transactionId);
console.log("ID của các giao dịch SUCCESS và có currency === 'VND': ", successVNDTransactions); 
        
let firstFailedTransaction = transactions.filter(Duyen5 => Duyen5.status === "FAILED")[0];
console.log("Giao dịch FAILED đầu tiên có transactionId: ", firstFailedTransaction.transactionId);