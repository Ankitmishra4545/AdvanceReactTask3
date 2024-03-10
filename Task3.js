//To create a dynamic ExpenseForm component with inputs for Expense title, Expense Amount, and Date, along with a button.
// ExpenseForm.js

import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (title.trim() === '' || amount.trim() === '' || date.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new expense object
    const newExpense = {
      title,
      amount: +amount, // Convert amount to a number
      date: new Date(date),
    };

    // Pass the new expense to the parent component (App.js)
    onAddExpense(newExpense);

    // Clear the form fields
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Expense Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Expense Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Expense Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

//In  App.js file, import and use the ExpenseForm component:

// App.js

import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    // Update the expenses state with the new expense
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      {/* Render your expenses list or other components here */}
    </div>
  );
};

export default App;

/*Now, when you run your React application, you should see the ExpenseForm component with input fields for title, amount, and date, along with a "Add Expense" button. 
When you fill in the form and click the button, it will call the addExpenseHandler function in the App.js file, updating the expenses state with the new expense.*/


/* We can create a simple ExpenseForm component in React that logs the user input to the console using vanilla JS and the onChange event*/

// ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = () => {
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  const handleTitleChange = (event) => {
    setExpenseTitle(event.target.value);
    console.log('Expense Title:', event.target.value);
  };

  const handleAmountChange = (event) => {
    setExpenseAmount(event.target.value);
    console.log('Expense Amount:', event.target.value);
  };

  const handleDateChange = (event) => {
    setExpenseDate(event.target.value);
    console.log('Expense Date:', event.target.value);
  };

  return (
    <div>
      <label>
        Expense Title:
        <input type="text" value={expenseTitle} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Expense Amount:
        <input type="text" value={expenseAmount} onChange={handleAmountChange} />
      </label>
      <br />
      <label>
        Expense Date:
        <input type="date" value={expenseDate} onChange={handleDateChange} />
      </label>
      <br />
      <button>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;

// In App.js file, import and use the ExpenseForm component:

// App.js
import React from 'react';
import ExpenseForm from './ExpenseForm';

const App = () => {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm />
    </div>
  );
};

export default App;






  
