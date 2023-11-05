import { useState } from 'react'


function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setTodos((currentTodos) =>
      [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false },]
    )

    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos)=>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos)=>
    currentTodos.filter(todo => todo.id !== id))
  }
  console.log(todos)
  return (
    <div id='root'>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input type='text' id='item' value={newItem} onChange={(event) => setNewItem(event.target.value)} />
        </div>
        <button >Add</button>
      </form>
      <h1>Todo List</h1>
      <ul className='list'>
        {todos.map(todo =>

          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={(event) => toggleTodo(todo.id, event.target.checked)} />
              {todo.title}
            </label>
            <button className='btn btn-danger' onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </li>

        )}
      </ul>
    </div>
  )
}

export default App
