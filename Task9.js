/*To add a filter to the expense tracker, you can create a simple filtering mechanism in the App.js file. */

// App.js
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    // Update filteredExpenses when a new expense is added
    setFilteredExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const filterExpensesHandler = (filterText) => {
    // Filter expenses based on the entered text (case insensitive)
    const filtered = expenses.filter((expense) =>
      expense.title.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredExpenses(filtered);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <input
        type="text"
        placeholder="Filter Expenses"
        onChange={(e) => filterExpensesHandler(e.target.value)}
      />
      <Expense expenses={filteredExpenses} />
    </div>
  );
};

export default App;


/*  In this example:

I added a new state variable filteredExpenses to store the filtered expenses.

The filterExpensesHandler function is triggered whenever the user types in the filter input. It filters the expenses based on the entered text (case-insensitive) and updates the filteredExpenses state.

The Expense component now receives the filteredExpenses array as a prop, and it will display the filtered list of expenses.  */
