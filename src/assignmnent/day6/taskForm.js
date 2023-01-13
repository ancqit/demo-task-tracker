// import { useState } from "react";
import BasicButtons from "../day5/button";
import InputTypeField from "./textInput";

export default function TaskForm({
  createTask,
  name,
  handleInputChange,
  isEditing,
  updateTask,
}) {
  return (
    <div>
      <form
        className="itemsAlign"
        onSubmit={isEditing ? updateTask : createTask}
      >
        <p>
          <InputTypeField
            label="Task"
            handleChange={handleInputChange}
            name="name"
            values={name}
            placeholder="Add a Task"
            focused={true}
          />
        </p>
        <p className="buttonHeight">
          <BasicButtons title={isEditing ? "Edit" : "Add"} />
        </p>
      </form>
    </div>
  );
}
