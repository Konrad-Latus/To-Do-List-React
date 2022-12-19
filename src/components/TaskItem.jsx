export default function TaskItem(props) {

    const { label, isChecked = false, completeTask } = props

    return (
        <li>
            <input type="checkbox" checked={isChecked} onChange={(event) => completeTask(event.target.checked, label)} />
            <div>{label}</div>
        </li>
    )
}