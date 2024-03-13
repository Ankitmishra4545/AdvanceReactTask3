const ExpenseList = ({ expenses }) => {
  return (
    <div>
      {expenses.length === 0 && <p>No expenses found.</p>}
      {expenses.length === 1 && <p>Only single Expense here. Please add more...</p>}
      {expenses.length > 1 && (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense.description} - {expense.amount}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

//In this code snippet:

//If expenses array is empty, it shows a message "No expenses found."
//If expenses array has only one element, it shows the message "Only single Expense here. Please add more...".
//If expenses array has more than one element, it renders the list of expenses.
//Make sure to adjust the message or styling according to your needs.
