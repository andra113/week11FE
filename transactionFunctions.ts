import { transactions, Transaction } from "./transactions";
// import {
//   typeTransactionsSelect,
//   detailsTransactionsInput,
//   amountTransactionsInput,
// } from "./index";

export function inputTransaction(typeValue:string, detailValue: string, amountValue: number) {
  const id = transactions.length + 1;
  const type = typeValue;
  const detail = detailValue;
  const amount = amountValue;

  const newTransaction: Transaction = {
    id: id,
    type: type,
    detail: detail,
    amount: amount,
  };

  transactions.push(newTransaction);
}
