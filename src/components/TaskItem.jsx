export default function TaskItem(props) {

    const { id, label, isChecked = false, completeTask } = props

    return (
        <li>
            <input type="checkbox" checked={isChecked} onChange={(event) => completeTask(event.target.checked, id)} />
            <div>{label}</div>
        </li>
    )
}