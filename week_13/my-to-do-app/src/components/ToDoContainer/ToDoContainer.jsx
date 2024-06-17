import { useState } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import ListComponent from '../ListComponent/ListComponent'
import "../Components.css"

const ToDoContainer = () => { // implementing the container for the list
    // set initial states of the container and of text content
    const [todos, setTodos] = useState([]) // initial state of a todo list is empty
    const [inputText, setInputText] = useState("") // initial input text is empty

    // ===== HANDLE METHODS =====
    // --- ADD TODO ---
    const handleAddToDo = () => {
        if (inputText.trim() !== '') { // if the input text isn't blank
            setTodos([...todos, inputText]); // add the new input to the list of todos
            setInputText(''); // then clear the input field
        };
    };

    // --- REMOVE TODO ---
    const handleRemoveTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1); // finds the item at the given index and takes it out
        setTodos(updatedTodos); // sets the list
    }

    // --- DELETE ALL TODOS ---
    const handleClearTodos = () => {
        setTodos([]); // sets the Todo list to nothing
    };

    return ( // starting with an empty todo list
        <main id='list-container'>
            <h2>Todo List</h2>
            <section id='tasks-container'>
                <input type="text" placeholder='Add new task...' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                
                <div id='buttons-container'>
                    <ButtonComponent buttonName='Add Task' buttonType='add' handleClick={handleAddToDo}/>
                    <ButtonComponent buttonName='Clear All Tasks' buttonType='delete' handleClick={handleClearTodos}/>
                </div>

                <div id='task-list'>
                    <ListComponent todos={todos} handleRemoveTodo={handleRemoveTodo} />
                </div>
            </section>
        </main>

    )

}

export default ToDoContainer;