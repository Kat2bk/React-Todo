import React from "react";
import { render } from "@testing-library/react";

const Todo = props => {
return (
<div className={`${props.item.completed ? "completed" : ""}`} onClick={() => props.toggleCompleted(props.item.id)}>
    <p>{props.item.task}</p>
</div>
)
}

export default Todo;