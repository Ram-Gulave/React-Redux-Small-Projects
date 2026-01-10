import React, { useState, useEffect } from "react";

export default function App() {
  const [bars, setBars] = useState([]);

  const addBar = () => {
    setBars([...bars, { id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Animated Progress Bars</h1>

      <button
        onClick={addBar}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
    let start = null;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative w-full bg-gray-300 h-6 rounded overflow-hidden">
      <div
        className="h-full bg-green-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      ></div>
      <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
        {Math.round(progress)}%
      </span>
    </div>
  );
}
