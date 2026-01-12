import { useState } from "react";

const Tabs = ({ tabs }) => {
    const [active, setActive] = useState(0);

    return (
        <div>
            <div>

                {tabs.map((item, index) => (
                    <button
                        key={index}
                        className={`tab ${index === active ? 'active' : ''}`}
                        onClick={() => setActive(index)}>
                        {item.label}
                    </button>
                ))}
            </div>
            <div>
                {tabs[active].content}
            </div>
        </div>
    )
}

const TabsComponents = () => {
    const Tab = [
        { label: "Tab A", content: <div>Contect of a A</div> },
        { label: "Tab B", content: <div>Contect of a B</div> },
        { label: "Tab C", content: <div>Contect of a C</div> },
    ]
    return <Tabs tabs={Tab} />;
}

export default TabsComponents;