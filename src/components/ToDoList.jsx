import React, { useState } from "react";


function ToDoList() {

    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

    const AddTasks = () => {
        if (!text.trim()) return;
        setTodo([...todo, { text, completed: false }])
        setText("")
        console.log(todo);

    };

    const RemoveTasks = (index) => {
        const newTodo = [...todo];
        newTodo.splice(index, 1);
        setTodo(newTodo)
    }

    const toggleTasks = (index) => {
        //  Approach 1
        // const newTodo = [...todo];         
        // newTodo[index].completed = !newTodo[index].completed;
        // setTodo(newTodo)

        // Approach 2
        setTodo(
            todo.map((item, i) => 
                i === index ? {...item, completed : !item.completed} : item
            )
        )
    }



    return (
        <>
            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add to TODO" required />
                <button onClick={AddTasks}>Add Tasks</button>
            </div>
            <ul>
                {todo.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span>
                            {todo.text}
                            <button onClick={() => toggleTasks(index)}>T</button>
                            <button onClick={() => RemoveTasks(index)}>X</button>
                        </span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToDoList;


// import React, { useState } from "react";

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");

//   const addTodo = () => {
//     if (!text.trim()) return;
//     setTodos([...todos, { text, completed: false }]);
//     setText("");
//   };

//   const deleteTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="What to do?"
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li
//             key={index}
//             style={{ textDecoration: todo.completed ? "line-through" : "none" }}
//           >
//             <span
//             //   onClick={() =>
//             //     setTodos(
//             //       todos.map((t, i) =>
//             //         i === index ? { ...t, completed: !t.completed } : t
//             //       )
//             //     )
//             //   }
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(index)}>×</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;