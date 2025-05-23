"use client";
import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

export function Dialog({
  onClose,
  title = "Dialog",
  children
}: {

  onClose: () => void;
  title: string
  children?: ReactNode
}) {
  //
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/20 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90%] bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 mr-8"><h3>{title}</h3></div>
        <div className="p-4">
          {children}
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-black cursor-pointer rounded-full w-8 h-8 flex items-center justify-center hover:opacity-80 transition"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
}
