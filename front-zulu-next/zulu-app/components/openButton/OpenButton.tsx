"use client"
import { useState } from "react"
import Sidebar from "../Sidebar/Sidebar"

export default function OpenButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bars"></i>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}