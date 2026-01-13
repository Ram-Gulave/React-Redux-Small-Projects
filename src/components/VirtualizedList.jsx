import React, { useState, useRef } from 'react';

const Virtualized = ({ items, itemHeight, height }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const totalHeight = items.length * itemHeight;
  const viewportRef = useRef(null);

  const handleScroll = () => {
    setScrollTop(viewportRef.current.scrollTop);
  };

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(items.length - 1, startIndex + Math.ceil(height / itemHeight));

  const visibleItems = items.slice(startIndex, endIndex + 1).map((item, index) => (
    <div key={index} style={{ height: itemHeight }}>
      {item}
    </div>
  ));

  return (
    <div ref={viewportRef} onScroll={handleScroll} style={{ height, overflowY: 'auto', position: 'relative' }}>
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ position: 'absolute', top: startIndex * itemHeight, width: '100%' }}>
          {visibleItems}
        </div>
      </div>
    </div>
  );
};

const VirtualizedList = () => {
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <Virtualized items={items} itemHeight={50} height={400} />
    </div>
  );
};

export default VirtualizedList;