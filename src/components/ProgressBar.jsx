
import React, { useState, useEffect } from "react";

export default function App() {
  const [bars, setBars] = useState([]);

  const addBar = () => {
    setBars([...bars, { id: Date.now() }]);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Animated Progress Bars</h1>

      <button
        onClick={addBar}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add
      </button>

      <div className="mt-6 space-y-4">
        {bars.map((bar) => (
          <ProgressBar key={bar.id} />
        ))}
      </div>
    </div>
  );
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20; // ms
    const step = 100 / (duration / interval);    // Calculate step size based on duration and interval 

    const id = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {                        // Stop at 100%
          clearInterval(id);
          return 100;
        }        
        return prev + step;                       // Increment progress until 100%
      });
    }, interval);

    return () => clearInterval(id);               // Cleanup on unmount when step completes
  }, []);

  return (
    <div className="w-full bg-gray-300 h-6 rounded overflow-hidden">
      <div
        className="h-full bg-green-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
