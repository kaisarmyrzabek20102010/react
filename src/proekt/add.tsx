import { useReducer, useState } from "react";
import "./Add.css";

export default function App() {
  const initialState = {
    todos: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              title: action.payload,
              completed: false,
            },
          ],
        };
      case "TOGGLE_TODO":
        return {
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
      case "EDIT_TODO":
        return {
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, title: action.payload.title }
              : todo
          ),
        };
      case "DELETE_TODO":
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };
  //Начальное состояние и редьюсер
  //Редьюсер обрабатывает 4 типа действий:

  //Состояния компонента
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleAddToDo = () => {
    if (inputValue.trim()) {
      dispatch({ type: "ADD_TODO", payload: inputValue });
      setInputValue("");
    }
  };

  const handleToggleToDo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleEditToDo = (id, title) => {
    setEditId(id);
    setEditTitle(title);
  };

  const handleSaveEdit = () => {
    dispatch({ type: "EDIT_TODO", payload: { id: editId, title: editTitle } });
    setEditId(null);
    setEditTitle("");
  };

  const handleDeleteToDo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };ч

  return (
    <div className="app-container">
      <h2>Todo List</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddToDo}>Add</button>
      </div>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleToDo(todo.id)}
                />
                {todo.completed ? "✅" : "❌"}
              </label>
            </div>
            {editId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              <div>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </span>
                <button onClick={() => handleEditToDo(todo.id, todo.title)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteToDo(todo.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
