"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchSchoolData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://week11-production.up.railway.app/api/noauth/schools');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = yield response.json();
            if (responseData.success) {
                displaySchools(responseData.data);
            }
            else {
                console.error('API request was successful, but an error occurred:', responseData.message);
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    });
}
function displaySchools(schools) {
    const schoolContainer = document.getElementById('schoolContainer');
    if (!schoolContainer) {
        return;
    }
    schools.forEach((school) => {
        const schoolDiv = document.createElement('div');
        schoolDiv.classList.add('school-card');
        const content = `
      <h2>${school.name}</h2>
      <img src="${school.imgUrl}" alt="${school.name} Image" class="school-image">
      <p><strong>Location:</strong> ${school.location}</p>
      <p><strong>Description:</strong> ${school.description}</p>
      <p><strong>Rating:</strong></p>
      <ul>
        <li><strong>Reputation:</strong> ${school.rating.reputation}</li>
        <li><strong>Location:</strong> ${school.rating.location}</li>
        <li><strong>Facilities:</strong> ${school.rating.facilities}</li>
      </ul>
    `;
        schoolDiv.innerHTML = content;
        schoolContainer.appendChild(schoolDiv);
    });
}
fetchSchoolData();
// function fetchTransaction() {
//   fetch("https://api-week8-andra.up.railway.app/transactions")
//     .then((response: Response) => response.json())
//     .then((transactionsAPI: Transaction[]) => {
//       transactions.push(...transactionsAPI);
//       displayTransaction(transactions);
//       calculatedTotals(transactions)
//       console.log("Succeeded to fetch API ");
//     })
//     .catch((error: Error) => {
//       console.error(error);
//     });
// }
// function displayTransaction(transactions: Transaction[]) {
//   list.innerHTML = "";
//   transactions.forEach((transaction, index) => {
//     const li = document.createElement("li");
//     li.textContent = `Type: ${transaction.type} - Detail: ${transaction.detail} - Amount: ${transaction.amount}`;
//     list.appendChild(li);
//   });
// }
// /// to calculate balance, total expenses and total income
// function calculatedTotals(transactions: Transaction[]) {
//     transactions.forEach((transaction) => {
//       if (transaction.type === "cash in") {
//         addTotalIncome(transaction.amount)
//       } else {
//         addTotalExpenses(transaction.amount)
//       }
//       account.balance = account.totalIncome - account.totalExpenses
//       updateDisplays(account)
//     });
//   }
// function postTransactionAPI(transaction: Transaction) {
//   fetch("https://api-week8-andra.up.railway.app/transactions", {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({transaction}),
//   })
//     .then((response: Response) => response.json())
//     .then((newTransaction) => {
//       console.log(`Succeeded to push to api: ${newTransaction}`);
//     })
//     .catch((error: Error) => {
//       console.error(error);
//     });
// }
// async function addTransaction(type: string, detail: string, amount: number) {
//   const newTransaction = {
//     type: type,
//     detail: detail,
//     amount: amount,
//   };
//   try {
//     const response = await fetch("https://api-week8-andra.up.railway.app/transactions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newTransaction),
//     });
//     if (response.ok) {
//       const createdTransaction = await response.json();
//       console.log("New transaction added:", createdTransaction);
//       if (createdTransaction.type === "cash in") {
//         addTotalIncome(createdTransaction.amount);
//       } else {
//         addTotalExpenses(createdTransaction.amount);
//       };
//       account.balance = account.totalIncome - account.totalExpenses
//       updateDisplays(account)
//       transactions.push(createdTransaction);
//       displayTransaction(transactions);
//     } else {
//       console.error("Failed to add transaction:", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error adding transaction:", error);
//   }
// }
// function addBalance(amount: number): number {
//   account.balance += amount;
//   return account.balance;
// }
// function subtractBalance(amount: number): number {
//   account.balance -= amount;
//   return account.balance;
// }
// function addTotalIncome(amount: number): number {
//   account.totalIncome += amount;
//   return account.totalIncome
// }
// function addTotalExpenses(amount: number): number {
//   account.totalExpenses += amount;
//   return account.totalExpenses;
// }
// function updateDisplays(account: Account) {
//   balanceDisplay.textContent = `$${account.balance.toFixed(0)}`;
//   totalIncomeDisplay.textContent = `RP${account.totalIncome.toFixed(0)}`;
//   totalExpensesDisplay.textContent = `$${account.totalExpenses.toFixed(0)}`;
// }
// addButton?.addEventListener("click", (event) => {
//   event.preventDefault();
//   const typeSelect = typeTransactionSelect.value;
//   const detailInput = detailTransactionInput.value;
//   const amountInput = parseInt(amountTransactionInput.value);
//   if (
//     amountTransactionInput.value !== "" &&
//     detailTransactionInput.value !== ""
//   ) {
//     addTransaction(typeSelect, detailInput, amountInput);
//     amountTransactionInput.value = "";
//     detailTransactionInput.value = "";
//   } else {
//     alert("Please fill in both details and amount.");
//   }
// });
//  import { transactions } from "./transactions";
//  interface Account {
//   name: string;
//   balance: number;
//   totalIncome: number;
//   totalExpenses: number;
// }
// const typeSelect = document.getElementById("type") as HTMLSelectElement;
// const amountInput = document.getElementById("amount") as HTMLInputElement;
// const detailsInput = document.getElementById("details") as HTMLInputElement;
// const list = document.getElementById("transactionList") as HTMLUListElement;
// const addButton = document.getElementById("addButton") as HTMLButtonElement;
// const balanceDisplay = document.getElementById("balance")!;
// const totalIncomeDisplay = document.getElementById("income")!;
// const totalExpensesDisplay = document.getElementById("expenses")!;
// const accountProfile: Account = {
//   name: "",
//   balance: 0,
//   totalIncome: 0,
//   totalExpenses: 0,
// };
// function updateDisplays() {
//   balanceDisplay.textContent = `$${accountProfile.balance.toFixed(2)}`;
//   totalIncomeDisplay.textContent = `$${accountProfile.totalIncome.toFixed(2)}`;
//   totalExpensesDisplay.textContent = `$${accountProfile.totalExpenses.toFixed(2)}`;
// }
// addButton?.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (amountInput.value !== "" && detailsInput.value !== "") {
//     inputTransaction();
//     displayTransaction();
//     const transactionAmount = parseFloat(amountInput.value);
//     if (typeSelect.value === "cash in") {
//       addTotalIncome(transactionAmount);
//       addBalance(transactionAmount);
//     } else {
//       addTotalExpenses(transactionAmount);
//       subtractBalance(transactionAmount);
//     }
//     amountInput.value = "";
//     detailsInput.value = "";
//   } else {
//     alert("Please fill in both details and amount.");
//   }
// });
// // Initialize displays
// updateDisplays();
