

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTasks, deleteTasks, toggleTasks } from "../redux/todoSlice";

const toDoList = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTasks(text));
            setText("");
        }
    };

    return (
        <div>
            <div>
                <h1> To Do List </h1>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a task......	"
                />
                <button onClick={handleAdd}>Add tasks</button>
            </div>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span
                                onClick={() => dispatch(toggleTasks(todo.id))}
                                className={`cursor-pointer ${ !todo.completed ? "line-through text-gray-400" : "" }`}
                            >
                                {todo.text}
                            </span>
                            <button onClick={() => dispatch(deleteTasks(todo.id))}>   X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default toDoList;

// state → the full Redux store object.
// .todo → accesses the slice/reducer named "todo" (as defined when you combined reducers with configureStore or combineReducers).
// .todos → accesses the todos array inside that slice (the property you mutate in your reducers, e.g., state.todos = ...).