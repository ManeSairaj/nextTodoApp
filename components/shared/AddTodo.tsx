import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/actions/todoActions";

const AddTodo = () => {
  return (
    <Form className="w-1/2 m-auto" action={create}>
      <div className="flex">
        <Input name="input" type="text" placeholder="Add Todo..." />

        <Button type="submit" text="add" />
      </div>
    </Form>
  );
};

export default AddTodo;
