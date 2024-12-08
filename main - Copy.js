// script.js

let balance = 10000;
let currentOperation = null;

function displayMessage(message) {
  document.getElementById('message').innerText = message;
}

function balanceInquiry() {
  displayMessage(`Your current balance is: Rs. ${balance}`);
  hideInputArea();
}

function cashWithdrawal() {
  currentOperation = 'withdraw';
  displayMessage('Enter the amount to withdraw:');
  showInputArea();
}

function depositAmount() {
  currentOperation = 'deposit';
  displayMessage('Enter the amount to deposit:');
  showInputArea();
}

function confirmTransaction() {
  const amount = parseInt(document.getElementById('amount').value);

  if (isNaN(amount) || amount <= 0) {
    displayMessage('Please enter a valid amount.');
    return;
  }

  if (currentOperation === 'withdraw') {
    if (amount > balance) {
      displayMessage('Insufficient balance!');
    } else {
      balance -= amount;
      displayMessage(`Transaction successful! Your new balance is: Rs. ${balance}`);
    }
  } else if (currentOperation === 'deposit') {
    balance += amount;
    displayMessage(`Amount successfully deposited! Your new balance is: Rs. ${balance}`);
  }

  hideInputArea();
}

function exitATM() {
  displayMessage('Thank you for using the ATM. Goodbye!');
  hideInputArea();
}

function showInputArea() {
  document.getElementById('input-area').style.display = 'block';
  document.getElementById('amount').value = '';
}

function hideInputArea() {
  document.getElementById('input-area').style.display = 'none';
}
