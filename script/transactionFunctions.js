import { transactions } from "./transactions";
// import {
//   typeTransactionsSelect,
//   detailsTransactionsInput,
//   amountTransactionsInput,
// } from "./index";
export function inputTransaction(typeValue, detailValue, amountValue) {
    const id = transactions.length + 1;
    const type = typeValue;
    const detail = detailValue;
    const amount = amountValue;
    const newTransaction = {
        id: id,
        type: type,
        detail: detail,
        amount: amount,
    };
    transactions.push(newTransaction);
}
