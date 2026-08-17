import React from 'react'

const App = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] bg-[#1B1E20] px-6 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block text-xs font-medium tracking-wide text-gray-400 border border-white/10 rounded-full px-3 py-1 mb-6">
          React Router + lazy()
        </span>
        <h1 className="text-4xl font-semibold text-white mb-4">Code Splitting</h1>
        <p className="text-gray-400 leading-relaxed mb-10">
          This page loaded instantly because it's part of the main bundle.
          About and Contact are separate chunks — they only download when you click their link.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-white font-medium mb-1">1. Eager</p>
            <p className="text-gray-400 text-sm">App.jsx ships in the main bundle, loads on first paint.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-white font-medium mb-1">2. Lazy</p>
            <p className="text-gray-400 text-sm">About & Contact are wrapped in lazy(), split into their own files.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-white font-medium mb-1">3. Suspense</p>
            <p className="text-gray-400 text-sm">Shows a fallback while the clicked route's chunk downloads.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App