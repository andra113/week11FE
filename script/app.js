"use strict";
let balance;
function addBalance(value) {
    return balance + value;
}
;
function subtractBalance(value) {
    return balance - value;
}
;
const addButton = document.getElementById("addButton");
addButton?.addEventListener("click", (event) => {
    event.preventDefault();
    const amountInput = document.getElementById("amount");
    const amountValue = amountInput.value;
    const list = document.getElementById("transactionList");
    const listItem = document.createElement("li");
    listItem.textContent = amountValue;
    list?.appendChild(listItem);
});
