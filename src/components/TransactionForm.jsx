import { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
    const [description, setDescription] = useState("");
    const [sum, setSum] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !sum) {
            alert("Please fill in both fields.");
            return;
        }
        onAddTransaction(description, sum);
        setDescription("");
        setSum("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={sum}
                onChange={(e) => setSum(e.target.value)}
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
