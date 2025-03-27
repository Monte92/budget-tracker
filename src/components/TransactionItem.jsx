import Confirmation from "./Confimation";
import { useRef } from "react";

const TransactionItem = ({ transaction, onDeleteTransaction }) => {

    const dialog = useRef();

    function handleConfimation() {
        console.log(dialog.current);
        
        dialog.current.showModal();
    }

    return (
        <>
            <Confirmation ref={dialog}/>
            <div className={`transaction ${transaction.sum < 0 ? "negative" : ""}`}>
                <span>{transaction.description} </span>
                <span> {transaction.sum.toFixed(2)} €</span>
                <button onClick={() => handleConfimation()}>X</button>
            </div>
        </>
    );
};

export default TransactionItem;
