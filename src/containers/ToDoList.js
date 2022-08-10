 import React from 'react'
 import {observer} from "mobx-react-lite";
import todo from '../store/todo';
import './ToDoList.scss'

 export const ToDoList = observer(() => {

     return (
         <div className='ToDoListWrapper'>
            <input className='createTaskArea' type='text' onChange={todo.handleChange}/>
             <button className='createTaskBtn' onClick={()=>todo.addToDo(todo.cache)}>Create New Task</button>
             <button className='fetchBtn' onClick={()=> todo.fetchToDos()}>Запрос с сервера</button>
             {todo.todos.map(t =>
             <div className='todoList' key={t.id}>
                 <input type='checkbox' checked={t.completed} onChange={()=> todo.completeToDO(t.id)}/>
                 {t.title}
                 <button onClick={()=> todo.removeToDo(t.id)}>X</button>
             </div>
             )}
       </div>
     )
 })
 export default ToDoList