import React, { useEffect, useState } from 'react';

export default function ProgressOpenBar() {
    const [bars, setBars] = useState([]);

    const addBar = () => {
        setBars([...bars, { id: Date.now() }]);
    };

    return (
        <div>
            <button
            onClick={addBar}
            >Add Progress Bar</button>
            <div className='' style={{ marginTop: '20px' }}>
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
        const duration = 2000; // total duration for the progress bar to fill
        const interval = 20; // milliseconds
        const step = 100 / (duration / interval);

        const id = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(id)
                    return 100;
                }
                return prev + step;
            })
        }, interval);

        return () => clearInterval(id);
    }, [])


    return (
        <div className="w-full bg-gray-300 h-6 rounded overflow-hidden">
            <div className="h-full bg-blue-500"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}