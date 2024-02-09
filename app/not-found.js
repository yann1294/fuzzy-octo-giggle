import React from 'react'

function NotFound() {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="max-w-lg p-8 bg-white rounded-lg shadow-md text-center">
          <img src="./background.jpg" alt="Coming Soon" className="mx-auto mb-8" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
          <p className="text-lg text-gray-600">We're working on something awesome. Stay tuned!</p>
        </div>
      </div>
    )
}

export default NotFound
