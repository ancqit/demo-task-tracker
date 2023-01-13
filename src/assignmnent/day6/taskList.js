import { GrEdit } from "react-icons/gr";
import { RiCheckDoubleLine, RiDeleteBin5Line } from "react-icons/ri";

export default function TaskList({ task, index, deleteTask, getSingleTask,completeTask }) {
  return (

    <div className={task.completed?"taskComplete taskBetween":"taskBetween taskIncomplete"}>
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>

      <p className="task-icon">
        <RiCheckDoubleLine color="green" onClick={()=>completeTask(task)}  />
        <span className="pd-2"></span>
        <GrEdit color="red" onClick={() => getSingleTask(task)} />
        <span className="pd-2"></span>
        <RiDeleteBin5Line color="red" onClick={() => deleteTask(task._id)} />
      </p>
    </div>
  );
}
