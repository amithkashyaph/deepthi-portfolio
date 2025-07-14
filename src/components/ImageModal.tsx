// components/ImageModal.tsx
import React, { useEffect, useRef } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-full max-h-full" ref={modalRef}>
        <img
          src={imageUrl}
          alt="Modal"
          className="max-w-full max-h-screen object-contain"
          onClick={onClose}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
