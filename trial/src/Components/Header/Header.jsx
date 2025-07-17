import React from 'react'

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/Images/logo.png" alt="Logo" className="h-10 w-auto" />
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Categories</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-blue-600 transition border p-1.5 rounded-lg">
          LOGIN
        </button>
      </div>
    </nav>
  )
}

export default Header