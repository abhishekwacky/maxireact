import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props){

    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseHandler = (enteredExpenseData)=>{

        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onAddData(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler =()=>{
        setIsEditing(true);
    }

    const stopEditingHandler =()=>{
        setIsEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler}/>}
    </div>
}

export default NewExpense;