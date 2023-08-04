"use strict";
//Import html element with DOM
const typeSelect = document.getElementById("type");
const amountInput = document.getElementById("amount");
const detailsInput = document.getElementById("details");
const list = document.getElementById("transactionList");
const addButton = document.getElementById("addButton");
const balanceDisplay = document.getElementById("balance");
const totalIncomeDisplay = document.getElementById("income");
const totalExpensesDisplay = document.getElementById("expenses");
let accountProfile = {
    name: "",
    balance: 0,
    totalIncome: 0,
    totalExpenses: 0,
};
balanceDisplay.textContent = `$${accountProfile.balance.toFixed(2)}`;
totalIncomeDisplay.textContent = `$${accountProfile.totalIncome.toFixed(2)}`;
totalExpensesDisplay.textContent = `$${accountProfile.totalExpenses.toFixed(2)}`;
function addBalance(amount) {
    accountProfile.balance += amount;
    return accountProfile.balance;
}
function subtractBalance(amount) {
    accountProfile.balance -= amount;
    return accountProfile.balance;
}
function addTotalIncome(amount) {
    accountProfile.totalIncome += amount;
    return accountProfile.totalIncome;
}
function addTotalExpenses(amount) {
    accountProfile.totalExpenses += amount;
    return accountProfile.totalExpenses;
}
const transactionList = [];
function inputTransaction() {
    const details = detailsInput.value;
    const amount = parseFloat(amountInput.value);
    const newTransactionList = {
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
        }
        else {
            addTotalExpenses(parseFloat(amountInput.value));
            subtractBalance(parseFloat(amountInput.value));
        }
        balanceDisplay.textContent = `$${accountProfile.balance.toFixed(2)}`;
        totalIncomeDisplay.textContent = `$${accountProfile.totalIncome.toFixed(2)}`;
        totalExpensesDisplay.textContent = `$${accountProfile.totalExpenses.toFixed(2)}`;
        amountInput.value = "";
        detailsInput.value = "";
    }
    else {
        alert("isi woi");
    }
});
