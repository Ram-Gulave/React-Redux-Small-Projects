import React, { useState } from "react";

const accordionData = [
    {
        title: "Section 1",
        content: "Content for section 1"
    },    {
        title: "Section 2",
        content: "Content for section 2"    
    },    {
        title: "Section 3",
        content: "Content for section 3"
    },  
    {
        title: "Section 4",
        content: "Content for section 4"
    }
];


const AccordionNew = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    
    return (
        <>
            <Div> Accordion working </Div>
            {accordionData.map((section, index) =>  (
                <div key={index}> 
                    <div onClick={() => handleToggle(index)}>
                    <h3>{section.title}</h3>
                    {activeIndex === index ? <span>-</span> : <span>+</span>}
                    </div>
                    <p>{activeIndex === index ? section.content : null}</p>
                    
                </div>
            ))}
        </>
    );
}

export default AccordionNew;