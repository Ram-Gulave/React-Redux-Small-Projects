import { useState } from 'react';

const accordionData = [
  {
    title: 'HTML',
    content: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
  },
  {
    title: 'CSS',
    content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
  },
  {
    title: 'JavaScript',
    content: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
  }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-sm bg-white">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`panel-${index}`}
              >
                {/* Title with extra horizontal and vertical space */}
                <span className="text-xl font-semibold text-gray-800 pr-8">
                  {item.title}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
                id={`panel-${index}`}
                role="region"
              >
                <div className="px-20 py-6 text-gray-600 ">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;