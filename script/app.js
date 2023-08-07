"use strict";
const typeSelect = document.getElementById("type");
const amountInput = document.getElementById("amount");
const detailsInput = document.getElementById("details");
const list = document.getElementById("transactionList");
const addButton = document.getElementById("addButton");
const balanceDisplay = document.getElementById("balance");
const totalIncomeDisplay = document.getElementById("income");
const totalExpensesDisplay = document.getElementById("expenses");
const accountProfile = {
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
function addBalance(amount) {
    accountProfile.balance += amount;
    return accountProfile.balance;
    updateDisplays();
}
function subtractBalance(amount) {
    accountProfile.balance -= amount;
    return accountProfile.balance;
    updateDisplays();
}
function addTotalIncome(amount) {
    accountProfile.totalIncome += amount;
    return accountProfile.totalIncome;
    updateDisplays();
}
function addTotalExpenses(amount) {
    accountProfile.totalExpenses += amount;
    return accountProfile.totalExpenses;
    updateDisplays();
}
const transactionList = [];
function inputTransaction() {
    const details = detailsInput.value;
    const amount = parseFloat(amountInput.value);
    const newTransaction = {
        details: details,
        amount: amount,
    };
    transactionList.push(newTransaction);
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
    if (amountInput.value !== "" && detailsInput.value !== "") {
        inputTransaction();
        displayTransaction();
        const transactionAmount = parseFloat(amountInput.value);
        if (typeSelect.value === "cash in") {
            addTotalIncome(transactionAmount);
            addBalance(transactionAmount);
        }
        else {
            addTotalExpenses(transactionAmount);
            subtractBalance(transactionAmount);
        }
        amountInput.value = "";
        detailsInput.value = "";
    }
    else {
        alert("Please fill in both details and amount.");
    }
});
// Initialize displays
updateDisplays();
