import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title = "Modal", 
  showCloseButton = true 
}) => {
  useEffect(() => {
    if (!isOpen) return;

    // Save previous overflow value (very important!)
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key to close
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);

    // Cleanup - restore everything when modal closes or unmounts
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">{title}</h2>
          
          {showCloseButton && (
            <button 
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          )}
        </div>

        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

// ── Example usage ───────────────────────────────────────────────
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      <button 
        className="open-modal-btn"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Welcome to My Modal"
      >
        <p>This is a clean, accessible, and well-behaved modal.</p>
        <p>You can close it by:</p>
        <ul>
          <li>Clicking the × button</li>
          <li>Clicking outside the modal</li>
          <li>Pressing the Esc key</li>
        </ul>
      </Modal>
    </div>
  );
};

export default App;