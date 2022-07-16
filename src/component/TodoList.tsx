import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {deleteTodo} from "../store/todoSlice";
import {Button} from "antd";
type TodoType = {
    id: number
    title: string
}
export function TodoList() {
    let todos = useSelector((state: any) => state.todos)
    return (
        <div>
            {todos.map((todo: TodoType, index: number) => <TodoItem key={index} id={todo.id} title={todo.title} />)}
        </div>
    )
}
function TodoItem(props: any) {
    const dispatch = useDispatch()
    const deleteTask = () => {
        dispatch(deleteTodo(props.id))
    }
    const updateTask = () => {

    }
    return (
        <div>
            {props.title}
            <Button type="primary" onClick={updateTask} >UPDATE</Button>
            <Button type={"primary"} danger={true} onClick={deleteTask}>DELETE</Button>
        </div>
    )
}