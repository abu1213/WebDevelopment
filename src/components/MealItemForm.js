import { useRef } from "react";

export const MealItemForm = (props) =>{
    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        
        const amountEntered = amountInputRef.current.value;
        const EnteredAmount = +amountEntered;
        props.onAddToCart(EnteredAmount)
    }
    
    return(
        <form onSubmit={submitHandler}>
            
            <label htmlFor="amount" className='mx-1'>Amount</label>
            <input ref={amountInputRef} className="mb-4" id="amount" type="number" min="1" max="5" step="1" defaultValue='1'/><br/>
    <button className="btn btn-outline-success mx-4">+ADD</button>
    </form>
    )
}