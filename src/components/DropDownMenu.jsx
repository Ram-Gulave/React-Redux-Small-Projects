import {useState} from "react"


const DropDownMenu = ({items}) => {
    const [isopen, setIsOpen ] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isopen)}>Menu</button>
            { isopen &&
                items.map((items, index) => (
                    <li key={index}>
                        {items}
                    </li>
                ))
            }
        </div>
    )
}

const DropDownMenuBar = () => {
    const items = ["Profile", "Contect", "career"];

    return (<DropDownMenu items={items} />)
}

export default DropDownMenuBar;