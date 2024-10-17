import { useState } from "react";

export function TodoInput(props) {
    const { handlerAddTodo } = props;
    const [inputValue, setInputValue] = useState('');
    const [ placeholder, setPlaceholder ] = useState('Add')
    console.log(inputValue);

    return (
        <div className="input-container">
            <input type="text" onChange={(event) => 
                {setInputValue(event.target.value)}} 
                placeholder={placeholder} value={inputValue}/>
            <button onClick={(event) => 
                { if (!inputValue) {
                    setPlaceholder('Add some task to add');
                    return;
                }
                    handlerAddTodo(inputValue)
                    setInputValue('')
                    setPlaceholder('Add')}}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
    
}