"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ComingSoonChampProfile() {
  // Get champion name from URL params
  const { champ } = useParams()
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [email, setEmail] = useState("")

  // Simulate loading champion data
  const [loading, setLoading] = useState(true)

  // Set a launch date (30 days from now)
  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => {
      clearInterval(timer)
      clearTimeout(loadingTimer)
    }
  }, [])

  // Handle newsletter signup
  const handleSubmit = (e) => {
    e.preventDefault()
    // This would connect to your backend in the real implementation
    alert(`Thanks for subscribing! We'll notify you when ${champ} profile is ready.`)
    setEmail("")
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-xl">
            Loading {champ ? champ.charAt(0).toUpperCase() + champ.slice(1) : "Champion"} data...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header with champion teaser */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
          style={{ backgroundImage: `url(/placeholder.svg?height=400&width=1200)` }}
        ></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-2 tracking-wider">
            {champ ? champ.toUpperCase() : "CHAMPION"} PROFILE
          </h1>
          <div className="w-24 h-1 bg-blue-500 mb-4"></div>
          <p className="text-xl md:text-2xl text-gray-200">Coming Soon</p>
        </div>
      </div>

      {/* Countdown section */}
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Champion Profile Launching In</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-gray-900 rounded-lg p-4 text-center">
              <span className="block text-3xl md:text-5xl font-bold text-blue-400">{countdown.days}</span>
              <span className="text-gray-400">Days</span>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-center">
              <span className="block text-3xl md:text-5xl font-bold text-blue-400">{countdown.hours}</span>
              <span className="text-gray-400">Hours</span>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-center">
              <span className="block text-3xl md:text-5xl font-bold text-blue-400">{countdown.minutes}</span>
              <span className="text-gray-400">Minutes</span>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-center">
              <span className="block text-3xl md:text-5xl font-bold text-blue-400">{countdown.seconds}</span>
              <span className="text-gray-400">Seconds</span>
            </div>
          </div>

          {/* Feature preview */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-center">Coming Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="text-3xl mb-2">🛠️</div>
                <h4 className="font-bold">Build Guide</h4>
              </div>
              <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="text-3xl mb-2">⚔️</div>
                <h4 className="font-bold">ARAM Stats</h4>
              </div>
              <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-bold">Synergies</h4>
              </div>
              <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="text-3xl mb-2">✨</div>
                <h4 className="font-bold">Abilities</h4>
              </div>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">Get Notified When We Launch</h3>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-gray-400 border-t border-gray-700">
        <p>© {new Date().getFullYear()} League of Legends Champion Guides. All rights reserved.</p>
      </footer>
    </div>
  )
}
