import TaskItem from "./TaskItem";

export default function TaskList(props) {
    const { tasks = [], completeTask } = props
    return (
        <ul>
            {tasks.map(({ label, isChecked }) => <TaskItem key={label} label={label} isChecked={isChecked} completeTask={completeTask} />)}
        </ul>
    )
}