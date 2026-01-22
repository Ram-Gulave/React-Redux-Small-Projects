import { useState } from "react"

const AddFruitsItems = () => {
    const [fruitsArray, setfruitsArray] = useState(["Banan", "Apple", "Graphs"])
    const [fruits, setFruits] = useState("")

    const AddFruits = () => {
        setfruitsArray([...fruitsArray, fruits])
        setFruits("")
    }

    return (
        <div>

            <input 
            type="text" 
            value={fruits}
            onChange={(e) => setFruits(e.target.value)}
            placeholder="Enter the fruits here............"
            />
            <button onClick={AddFruits}>Add</button>
            {fruitsArray.map((fruit, index) => (
                <li key={index}>
                    {fruit}
                </li>
            ))}
        </div>
    )
}

export default AddFruitsItems;