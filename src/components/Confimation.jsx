import React, { forwardRef } from 'react';

const Confirmation = forwardRef((props, ref) => {
    return (
        <dialog ref={ref} className="confirmation">
            <h2>Confirm deletion</h2>
            <form action="dialog">
                <button>Yes</button>
                <button>No</button>
            </form>
        </dialog>
    );
});

export default Confirmation;
