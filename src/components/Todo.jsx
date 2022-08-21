import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "reactstrap";

// redux
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../action/todo";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <ListGroup className="mt-5 mb-2">
      {todos?.map((todo) => (
        <ListGroupItem key={todo.id} className="d-flex justify-content-between">
          {todo.title}
          <span
            onClick={() => dispatch(removeTodo(todo.id))}
            className="float-right"
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default Todo;
