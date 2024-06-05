"use client";

import { todoType } from "@/types/todoTypes";
import Button from "../ui/Button";
import { BiEdit } from "react-icons/bi";
import Form from "../ui/Form";
import { edit } from "@/app/actions/todoActions";
import Input from "../ui/Input";
import { useState } from "react";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted === true) {
      return;
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />

          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type="submit" text="Save" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
