const App = () => { // first letter must be capitalized
const todo = { text: 'Shopping', done: true };
const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: false},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];
  const numbers = [10, 20, 30, 40]

    return (
        <>
            <h1>JavaScript in JSX</h1>
            <p>{todo.text}</p>
    
            <h2>Conditional Rendering</h2>
            <p>
                {
                    todo.done ? `Task Completed - ${todo.text}` : todo.text /*if dark, do this */
                }
            </p>
            
            {/* If todo task is done who task is done else show task is incomplete */}
            {
                todo.done ? <h4>Task done</h4> : <h4>Task incomplete</h4>
            }

            <div>
                <ul>
                    {
                    todos.map(todo => { //for each todo in the todos array
                        return <li>{todo.text}</li> // create a list item that has the text
                    })
                    }
                </ul>
            </div>

            <div>
                <h2>My Numbers</h2>
                {
                numbers.map((number, i) => <h3 key={i}>{number}</h3>)
                }
            </div>
        </>
  
    );
};

export default App; // exporting function to be used by React