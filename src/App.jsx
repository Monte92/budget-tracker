import { useState } from "react";
import TransactionForm from "./components/TransactionForm.jsx";
import TransactionList from "./components/TransactionList.jsx";
import Balance from "./components/Balance.jsx"; 

const App = () => {
    const [transactions, setTransactions] = useState([]);

    // Function to add a transaction
    const addTransaction = (description, sum) => {
        const newTransaction = {
            id: transactions.length + 1, // Unique ID
            description,
            sum: parseFloat(sum),
        };
        setTransactions([...transactions, newTransaction]);
    };

    // Function to delete a transaction
    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };

    let startingBalance = parseFloat(200);
    return (
        <div className="app-container">
            <h1>Expense Tracker</h1>
            <Balance startingBalance={startingBalance} transactions={transactions} /> 
            <TransactionForm onAddTransaction={addTransaction} />
            <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
        </div>
    );
};

export default App;
