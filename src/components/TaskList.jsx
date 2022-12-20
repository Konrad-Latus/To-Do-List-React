import TaskItem from "./TaskItem";

export default function TaskList(props) {
    const { tasks = [], completeTask } = props
    return (
        <ul>
            {tasks.map(({ id, label, isChecked }) =>
                <TaskItem id={id} key={id} label={label} isChecked={isChecked} completeTask={completeTask} />)}
        </ul>
    )
}