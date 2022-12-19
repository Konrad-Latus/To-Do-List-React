import { useState } from "react"

export default function TaskInput(props) {
    const { onNewTask } = props

    const [userInput, setUserInput] = useState("")

    const addTask = () => {
        if (userInput === "") return;
        onNewTask(userInput)
        setUserInput("")
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Za Gomeza!!"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}></input>
            <button onClick={addTask}>Add</button>
        </div>
    )
}