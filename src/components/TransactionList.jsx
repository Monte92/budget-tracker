import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions, onDeleteTransaction }) => {
    return (
        <div>
            <h3>Transactions</h3>
            {transactions.length === 0 ? <p>No transactions yet.</p> : null}
            {transactions.map((transaction) => (
                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                    onDeleteTransaction={onDeleteTransaction}
                />
            ))}
        </div>
    );
};

export default TransactionList;
