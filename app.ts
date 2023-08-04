//Import html element with DOM
const typeSelect = document.getElementById("type") as HTMLSelectElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const detailsInput = document.getElementById("details") as HTMLInputElement;
const list = document.getElementById("transactionList") as HTMLUListElement;
const addButton = document.getElementById("addButton") as HTMLButtonElement;
const balanceDisplay: HTMLElement | null = document.getElementById("balance")!;
const totalIncomeDisplay: HTMLElement | null =
  document.getElementById("income")!;
const totalExpensesDisplay: HTMLElement | null =
  document.getElementById("expenses")!;
interface transaction {
  details: string;
  amount: number;
}

interface account {
  name: string;
  balance: number;
  totalIncome: number;
  totalExpenses: number;
}

let accountProfile: account = {
  name: "",
  balance: 0,
  totalIncome: 0,
  totalExpenses: 0,
};

balanceDisplay.textContent = `$${accountProfile.balance.toFixed(2)}`;
totalIncomeDisplay.textContent = `$${accountProfile.totalIncome.toFixed(2)}`;
totalExpensesDisplay.textContent = `$${accountProfile.totalExpenses.toFixed(
  2
)}`;

function addBalance(amount: number): number {
  accountProfile.balance += amount;
  return accountProfile.balance;
}

function subtractBalance(amount: number): number {
  accountProfile.balance -= amount;
  return accountProfile.balance;
}

function addTotalIncome(amount: number): number {
  accountProfile.totalIncome += amount;
  return accountProfile.totalIncome;
}

function addTotalExpenses(amount: number): number {
  accountProfile.totalExpenses += amount;
  return accountProfile.totalExpenses;
}

const transactionList: transaction[] = [];

function inputTransaction() {
  const details = detailsInput.value;
  const amount = parseFloat(amountInput.value);

  const newTransactionList: transaction = {
    details: details,
    amount: amount,
  };

  transactionList.push(newTransactionList);
}

function displayTransaction() {
  list.innerHTML = "";
  transactionList.forEach((transaction, index) => {
    const li = document.createElement("li");
    li.textContent = `${transaction.details} - Amount: ${transaction.amount}`;
    list.appendChild(li);
  });
}

addButton?.addEventListener("click", (event) => {
  event.preventDefault();
  if (amountInput.value != "" && detailsInput.value != "") {
    inputTransaction();
    displayTransaction();
    if (typeSelect.value == "cash in") {
      addTotalIncome(parseFloat(amountInput.value));
      addBalance(parseFloat(amountInput.value));
    } else {
      addTotalExpenses(parseFloat(amountInput.value));
      subtractBalance(parseFloat(amountInput.value));
    }
    balanceDisplay.textContent = `$${accountProfile.balance.toFixed(2)}`;
    totalIncomeDisplay.textContent = `$${accountProfile.totalIncome.toFixed(
      2
    )}`;
    totalExpensesDisplay.textContent = `$${accountProfile.totalExpenses.toFixed(
      2
    )}`;
    amountInput.value = "";
    detailsInput.value = "";
  } else {
    alert("isi woi");
  }
});
