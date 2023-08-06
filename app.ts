interface Transaction {
  details: string;
  amount: number;
}

interface Account {
  name: string;
  balance: number;
  totalIncome: number;
  totalExpenses: number;
}

const typeSelect = document.getElementById("type") as HTMLSelectElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const detailsInput = document.getElementById("details") as HTMLInputElement;
const list = document.getElementById("transactionList") as HTMLUListElement;
const addButton = document.getElementById("addButton") as HTMLButtonElement;
const balanceDisplay = document.getElementById("balance")!;
const totalIncomeDisplay = document.getElementById("income")!;
const totalExpensesDisplay = document.getElementById("expenses")!;

const accountProfile: Account = {
  name: "",
  balance: 0,
  totalIncome: 0,
  totalExpenses: 0,
};

function updateDisplays() {
  balanceDisplay.textContent = `$${accountProfile.balance.toFixed(2)}`;
  totalIncomeDisplay.textContent = `$${accountProfile.totalIncome.toFixed(2)}`;
  totalExpensesDisplay.textContent = `$${accountProfile.totalExpenses.toFixed(2)}`;
}

function addBalance(amount: number): number {
  accountProfile.balance += amount;
  return accountProfile.balance;
  updateDisplays();
}

function subtractBalance(amount: number): number {
  accountProfile.balance -= amount;
  return accountProfile.balance
  updateDisplays();
}

function addTotalIncome(amount: number): number {
  accountProfile.totalIncome += amount;
  return accountProfile.totalIncome
  updateDisplays();
}

function addTotalExpenses(amount: number): number {
  accountProfile.totalExpenses += amount;
  return accountProfile.totalExpenses;
  updateDisplays();
}

const transactionList: Transaction[] = [];

function inputTransaction(): void {
  const details = detailsInput.value;
  const amount = parseFloat(amountInput.value);

  const newTransaction: Transaction = {
    details: details,
    amount: amount,
  };

  transactionList.push(newTransaction);
}

function displayTransaction(): void {
  list.innerHTML = "";
  transactionList.forEach((transaction, index) => {
    const li = document.createElement("li");
    li.textContent = `${transaction.details} - Amount: ${transaction.amount}`;
    list.appendChild(li);
  });
}

addButton?.addEventListener("click", (event) => {
  event.preventDefault();
  if (amountInput.value !== "" && detailsInput.value !== "") {
    inputTransaction();
    displayTransaction();
    const transactionAmount = parseFloat(amountInput.value);
    if (typeSelect.value === "cash in") {
      addTotalIncome(transactionAmount);
      addBalance(transactionAmount);
    } else {
      addTotalExpenses(transactionAmount);
      subtractBalance(transactionAmount);
    }
    amountInput.value = "";
    detailsInput.value = "";
  } else {
    alert("Please fill in both details and amount.");
  }
});

// Initialize displays
updateDisplays();
