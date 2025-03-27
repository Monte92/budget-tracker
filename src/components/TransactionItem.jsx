const TransactionItem = ({ transaction, onDeleteTransaction }) => {
    return (
        <div className={`transaction ${transaction.sum < 0 ? "negative" : ""}`}>
            <span>{transaction.description} </span>
            <span> {transaction.sum.toFixed(2)} €</span>
            <button onClick={() => onDeleteTransaction(transaction.id)}>X</button>
        </div>
    );
};

export default TransactionItem;
