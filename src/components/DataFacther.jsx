import { useEffect, useState } from "react";

const DataFecther = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then((data) => data.json())
        .then(data => {
            setData(data.users);
            setLoading(false);
            console.log(data.users);        
        })
    }, [])

    if (loading) <p>Loading....</p>

    return (
        <ul>
            {data.map((item, id) => (
                <li key={id}>
                    {item.firstName} {item.lastName} • {item.age} years old
                </li>
            ))}
        </ul>
    )
}

export default DataFecther;