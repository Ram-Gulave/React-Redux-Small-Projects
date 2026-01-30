// import React, { useState } from "react";

// import { useCallback } from "react"

// const accordionData = [
//     {
//         title: "Section 1",
//         content: "Content for section 1"
//     },    {
//         title: "Section 2",
//         content: "Content for section 2"    
//     },    {
//         title: "Section 3",
//         content: "Content for section 3"
//     },  
//     {
//         title: "Section 4",
//         content: "Content for section 4"
//     }
// ];


// const AccordionNew = () => {

//     const [activeIndex, setActiveIndex] = useState(null);

//     const handleToggle = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     }

//     return (
//         <>
//             <div> Accordion working </div>
//             {accordionData.map((section, index) =>  (
//                 <div key={index}> 
//                     <div onClick={() => handleToggle(index)} className="flex justify-center items-center gap-2">
//                     <h3>{section.title}</h3>
//                     {activeIndex === index ? <span>-</span> : <span>+</span>}
//                     </div>
//                     <p className="flex justify-center items-center">{activeIndex === index ? section.content : null}</p>

//                 </div>
//             ))}
//         </>
//     );
// }

// export default AccordionNew;

import { useCallback, useState, memo } from "react"

const data = [
    { title: "Content A", description: "This is the content of data A. It can be a longer paragraph with details." },
    { title: "Content B", description: "This is the content of data B. Add as much text as needed here." },
    { title: "Content C", description: "This is the content of data C. Feel free to expand this section." },
    { title: "Content D", description: "This is the content of data D. More descriptive text goes here." },
];

const AccordionItem = memo(function AccordionData({ item, index, isOpen, onToggle }) {

    const handleClick = useCallback(() => {
        onToggle(index)
    }, [onToggle, index])

    return (
        <div className="border border-gray-300 mb-2 rounded-md">
            <div
                onClick={handleClick}
                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 cursor-pointer flex justify-between items-center font-semibold transition-colors duration-200"
            >
                <h3 className="m-0 text-lg">{item.title}</h3>
                <span className="text-2xl font-bold">{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && (
                <div className="px-4 py-4 bg-white">
                    <p className="m-0 text-gray-700">{item.description}</p>
                </div>
            )}
        </div>
    );
})


const AccordionNew = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleToggle = useCallback((index) => {
        setActiveIndex((prev) => (prev === index ? null : index))
    }, []);

    return (
        <div>
            <h2>Simple Accodance</h2>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    index={index}
                    isOpen={activeIndex === index}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    )
}

export default AccordionNew;