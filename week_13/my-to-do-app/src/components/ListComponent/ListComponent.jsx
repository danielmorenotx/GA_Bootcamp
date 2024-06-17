import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ListComponent = ({todos, handleRemoveTodo}) => { // need a list and a button to remove the list item

    return (
        <>
            {todos.map((todo, index) => (
                <div key={index} className='task'>
                    <p>{todo}</p>
                    <ButtonComponent buttonName="Delete" buttonType='delete' handleClick={() => handleRemoveTodo(index)}/>
                </div>
            ))}
            </>
    )
}

export default ListComponent;