let balance: number;

function addBalance(value: number): number {
    return balance + value;
};

function subtractBalance(value: number): number {
    return balance - value;
};

const addButton = document.getElementById("addButton") as HTMLButtonElement;

addButton?.addEventListener("click", (event) => {
    event.preventDefault();

    const amountInput = document.getElementById("amount") as HTMLInputElement;
    const amountValue = amountInput.value;
    const list = document.getElementById("transactionList") as HTMLUListElement;
    const listItem = document.createElement("li");
    listItem.textContent = amountValue;
    list?.appendChild(listItem);
});