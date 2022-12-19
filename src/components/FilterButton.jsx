export default function FilterButton(props) {
    const { label } = props
    return (
        <li>
            <button>{label}</button>
        </li>
    )
}