import { useState } from "react";
import FilterList from "../components/FilterList";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

let taskid = 0;

export default function TodoPage() {

    const [tasks, setTasks] = useState([])

    const addNewTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, {
            id: taskid++,
            label: newTask,
            isChecked: false
        }])
    }

    const completeTask = (isChecked, id) => {
        setTasks((prevTasks) =>
            prevTasks.map((prevTask) =>
                prevTask.id === id ? { id, label: prevTask.label, isChecked } : prevTask))
    }

    return (
        <div>
            <TaskInput onNewTask={addNewTask} />
            <TaskList tasks={tasks} completeTask={completeTask} />
            <FilterList />
        </div>
    )
}