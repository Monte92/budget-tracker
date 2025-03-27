const Balance = ({ startingBalance ,transactions }) => {
    // Calculate total balance
    const totalBalance = startingBalance + transactions.reduce((acc, transaction) => acc + transaction.sum, 0);

    return (
        <div className="balance">
            <h2>Your Balance</h2>
            <p>{totalBalance.toFixed(2)} €</p> {/* Display balance with 2 decimal points */}
        </div>
    );
};

export default Balance;
