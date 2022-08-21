import React, { useState } from "react";

import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { v4 } from "uuid";

// redux
import { useDispatch } from "react-redux";
import { addTodo } from "../action/todo";

function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "") {
      return alert("Please add your next Todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    dispatch(addTodo(todo));

    setTitle("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter your next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value.trim())}
          />
          <InputGroupText>
            <Button color="primary">ADD</Button>
          </InputGroupText>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}

export default TodoForm;
