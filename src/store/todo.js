import {makeAutoObservable} from "mobx";

class ToDo {
    todos =[
        {id: 1, title: 'Watch this video', completed: false},
        {id: 2, title:'Say I Love', completed: false},
        {id: 3, title: 'Good Work', completed: false}
    ]
    cache=''
    constructor() {
        makeAutoObservable(this)
    }
    handleChange = e => {
        this.cache = e.target.value
    }
    addToDo(t){
        this.todos.push(
            {id: Math.floor(Math.random()*100), title: t, completed: false}
        )
    }
    removeToDo(id){
        this.todos = this.todos.filter(todo => todo.id !==id)
    }
    completeToDO(id){
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }
    fetchToDos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new ToDo