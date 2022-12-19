import FilterButton from "./FilterButton";

export default function FilterList() {
    return (
        <ul>
            <FilterButton label="All" />
            <FilterButton label="Complete" />
            <FilterButton label="Done" />
        </ul>
    )
}