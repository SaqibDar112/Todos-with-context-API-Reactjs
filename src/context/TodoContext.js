import { useContext,createContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todoTitle:" Todo msg",
            completed:false,
        }
    ],

    addTodo: ()=>{},
    updateTodo: ()=>{},
    deletTodo: ()=>{},
    toggleComplete: ()=>{}
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider