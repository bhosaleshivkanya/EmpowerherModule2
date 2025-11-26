// Q20 – Assignment Questions on Closures

// =======================
// Question 1: createCounter
// =======================

function createCounter() {
 
  let count = 0;

  function increment() {
    count++;
    console.log("Current count:", count);
  }

  function decrement() {
    count--;
    console.log("Current count:", count);
  }

  function display() {
    console.log("Current count:", count);
  }

  // return an object so outside code can use these functions
  return {
    increment: increment,
    decrement: decrement,
    display: display,
  };
}


const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.display();   


// ---- Explanation for Q1 (you can write this in the answer box) ----
//
// 1) How closures are used to encapsulate the counter variable?
//    -> The variable `count` is declared inside createCounter. The inner
//       functions (increment, decrement, display) form a closure over
//       `count`, so they can still access and change it even after
//       createCounter has finished running. Outside code cannot access
//       `count` directly, only through these functions.
//
// 2) What happens if multiple counters are created?
//    -> Each call to createCounter() creates a new `count` variable
//       in a new closure. So:
//          const c1 = createCounter();
//          const c2 = createCounter();
//       `c1` and `c2` have completely separate `count` values and do
//       not affect each other.


// =======================
// Question 2: createBankAccount
// =======================

function createBankAccount() {
  // private variables
  let balance = 0;
  let transactionHistory = [];

  function deposit(amount) {
    if (amount > 0) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log("Deposited:", amount);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  function withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive");
      return;
    }

    if (amount <= balance) {
      balance -= amount;
      transactionHistory.push(`Withdrawn: ${amount}`);
      console.log("Withdrawn:", amount);
    } else {
      console.log("Insufficient balance");
    }
  }

  function getBalance() {
    console.log("Current balance:", balance);
    return balance;
  }

  function getTransactionHistory() {
    console.log("Transaction history:", transactionHistory);
    return transactionHistory;
  }

  return {
    deposit: deposit,
    withdraw: withdraw,
    getBalance: getBalance,
    getTransactionHistory: getTransactionHistory,
  };
}

// Example usage:
const account = createBankAccount();
account.deposit(500);    // Output: Deposited: 500
account.withdraw(200);   // Output: Withdrawn: 200
account.withdraw(400);   // Output: Insufficient balance
account.getBalance();    // Output: Current balance: 300
account.getTransactionHistory(); // shows all transactions

// ---- Explanation for Q2 (you can write this in the answer box) ----
//
// 1) How does the closure ensure that the balance variable is private?
//    -> `balance` (and `transactionHistory`) are defined inside
//       createBankAccount and are not returned directly. Only the inner
//       functions (deposit, withdraw, getBalance, getTransactionHistory)
//       can access them through closure. From outside, we cannot do
//       account.balance, it gives undefined.
//
// 2) transactionHistory feature:
//    -> We added an array `transactionHistory` inside createBankAccount.
//       Each deposit/withdraw pushes a message into this array.
//       The function getTransactionHistory() returns or logs this array.
//       Because of closures, the history is also private and can only be
//       read through this function.
