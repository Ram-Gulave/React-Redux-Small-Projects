// import { useState } from "react"

// const data = [
//     { title: "Content A", description: "This is a content of a data A" },
//     { title: "Content B", description: "This is a content of a data B" },
//     { title: "Content C", description: "This is a content of a data C" },
//     { title: "Content D", description: "This is a content of a data D" },
// ]

// const Accordion = () => {
//     const [active, setActive] = useState(null);

//     const HandleClick = (index) => {
//         console.log(`AccordionItem ${index} rendered`);
//         setActive(active === index ? null : index)
//     }

//     return (
//         <div>
//             {data.map((items, index) =>
//                 <div key={index}>
//                     <div onClick={() => HandleClick(index)}>
//                         <h3>{items.title}</h3>
//                         {active === index ? <span>-</span> : <span>+</span>}
//                     </div>
//                     <p>{active === index ? items.description : ""}</p>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Accordion;
// App.js or main component file
import React, { useState, useCallback, memo } from "react";

// Sample data (static, so references are stable)
const data = [
  { title: "Content A", description: "This is the content of data A. It can be a longer paragraph with details." },
  { title: "Content B", description: "This is the content of data B. Add as much text as needed here." },
  { title: "Content C", description: "This is the content of data C. Feel free to expand this section." },
  { title: "Content D", description: "This is the content of data D. More descriptive text goes here." },
];

// Memoized Accordion Item to prevent unnecessary re-renders
const AccordionItem = memo(function AccordionItem({ item, index, isOpen, onToggle }) {
  console.log(`AccordionItem ${index} (${item.title}) rendered`);
  
  // Stable click handler (index and onToggle are stable)
  const handleClick = useCallback(() => {
    onToggle(index);
  }, [onToggle, index]);

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
});

// Main Accordion Component
const Accordion = () => {
  console.log("Parent Accordion rendered");
  const [activeIndex, setActiveIndex] = useState(null);

  // Stable toggle handler using functional update
  const handleToggle = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Simple Accordion</h1>
      {data.map((item, index) => (
        <AccordionItem
          key={index} // Use item.id if available in real data
          item={item}
          index={index}
          isOpen={activeIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
