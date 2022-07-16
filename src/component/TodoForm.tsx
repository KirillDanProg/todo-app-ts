import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTodo} from "../store/todoSlice";
import React from "react";
import { Button } from "antd";

export function TodoForm() {
    const {resetField, handleSubmit, register} = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data: any) => {
        if (data.todo) {
            dispatch(addTodo(data.todo))
            resetField("todo")
        }
    }
    return (
        <form>
            <input {...register("todo")} name={"todo"}/>
            <Button onClick={handleSubmit(onSubmit)} type={"primary"}>ADD TODO</Button>
        </form>
    )
}