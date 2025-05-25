"use client"

import React, { useState } from "react"
import { Link } from "react-router-dom"

// Componentes de iconos (puedes reemplazarlos con tu librería de iconos preferida)
const Lightning = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
    <path d="m13 12-3 5h4l-1 4 3-5h-4l1-4Z" />
  </svg>
)

const Search = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const Download = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
)

const Trophy = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

const Clock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const Target = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const Shield = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
)

const Sword = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <line x1="13" x2="19" y1="19" y2="13" />
    <line x1="16" x2="20" y1="16" y2="20" />
    <line x1="19" x2="21" y1="21" y2="19" />
  </svg>
)

// Componentes UI personalizados
const Avatar = ({ children, className }) => <div className={`relative inline-block ${className}`}>{children}</div>

const AvatarImage = ({ src, alt }) => (
  <img src={src || "/placeholder.svg"} alt={alt} className="h-full w-full object-cover" />
)

const AvatarFallback = ({ children, className }) => (
  <div className={`flex h-full w-full items-center justify-center bg-zinc-700 text-white ${className}`}>{children}</div>
)

const Button = ({ children, className, variant }) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium focus:outline-none transition-colors"
  const variantClasses =
    variant === "outline"
      ? "border border-zinc-700 bg-[#1A1A1C] text-white hover:bg-[#2A2A2C]"
      : "bg-red-600 text-white hover:bg-red-700"

  return <button className={`${baseClasses} ${variantClasses} ${className}`}>{children}</button>
}

const Progress = ({ value, className, indicatorClassName }) => (
  <div className={`h-2 w-full bg-zinc-700 rounded-full overflow-hidden ${className}`}>
    <div className={`h-full bg-blue-500 ${indicatorClassName}`} style={{ width: `${value}%` }} />
  </div>
)

const Tabs = ({ children, defaultValue, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  // Modificar los hijos para pasar el estado activo
  const modifiedChildren = React.Children.map(children, (child) => {
    if (child.type.name === "TabsContent") {
      return React.cloneElement(child, {
        active: child.props.value === activeTab,
      })
    }
    if (child.type.name === "TabsList") {
      return React.cloneElement(child, {
        activeTab,
        setActiveTab,
      })
    }
    return child
  })

  return <div className={className}>{modifiedChildren}</div>
}

const TabsList = ({ children, className, activeTab, setActiveTab }) => {
  // Modificar los hijos para pasar el estado activo y la función de cambio
  const modifiedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      active: child.props.value === activeTab,
      onClick: () => setActiveTab(child.props.value),
    })
  })

  return <div className={`flex space-x-1 rounded-md ${className}`}>{modifiedChildren}</div>
}

const TabsTrigger = ({ children, value, active, onClick, className }) => (
  <button
    className={`px-4 py-2 text-sm font-medium transition-colors ${active ? "bg-[#1A1A1C] text-white" : "text-zinc-400 hover:text-white"} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

const TabsContent = ({ children, value, active }) => <div className={active ? "block" : "hidden"}>{children}</div>

export default function UserProfile() {
  const [selectedGame, setSelectedGame] = useState("League of Legends")

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0C] text-white">
      {/* Navigation Bar */}
      <header className="border-b border-zinc-800 bg-[#0A0A0C]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex items-center">
                <div className="text-red-500"></div>
              </Link>

              {/* Removed the game selection navbar */}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4">
                  <Search />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#1A1A1C] text-zinc-300 pl-10 pr-4 py-2 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                />
              </div>
              <Button variant="outline" className="bg-[#1A1A1C] text-white border-zinc-700 hover:bg-[#2A2A2C]">
                Sign In
              </Button>
              <span className="text-zinc-400">English</span>
            </div>
          </div>
        </div>
      </header>

      {/* User Profile Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - User Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#1A1A1C] rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-20 w-20 rounded-full border-2 border-blue-500">
                  <AvatarImage
                    src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Leona/Leona.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9MZW9uYS9MZW9uYS5wbmciLCJpYXQiOjE3NDczMzE2NjEsImV4cCI6MTc3ODg2NzY2MX0.lpJsS55ggGs1_HYk45X0BGkQZXPneuNNNTZZt_SWTbM"
                    alt="User"
                  />
                </Avatar>
                <div>
                  <h1 className="text-white text-2xl font-bold">ProGamer123</h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Level 156</div>
                    <span className="text-zinc-400 text-sm">Last online: 2h ago</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-400">Season Progress</span>
                    <span className="text-white">156 / 200</span>
                  </div>
                  <Progress value={78} className="h-2 bg-zinc-700" indicatorClassName="bg-blue-500" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#252529] rounded-md p-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-yellow-500">
                        <Trophy />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Rank</div>
                        <div className="text-zinc-400 text-xs">Diamond II</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#252529] rounded-md p-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-blue-500">
                        <Clock />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Play Time</div>
                        <div className="text-zinc-400 text-xs">1,245 hours</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#252529] rounded-md p-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-red-500">
                        <Target />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Win Rate</div>
                        <div className="text-zinc-400 text-xs">58.3%</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#252529] rounded-md p-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-purple-500">
                        <Sword />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">KDA</div>
                        <div className="text-zinc-400 text-xs">3.42:1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1C] rounded-lg p-6">
              <h2 className="text-white text-lg font-semibold mb-4">Most Played Champions</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12 rounded-md">
                        <AvatarImage src={`/placeholder.svg?height=48&width=48&text=Champ${i}`} alt={`Champion ${i}`} />
                        <AvatarFallback className="rounded-md">C{i}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 bg-[#0A0A0C] text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                        {i}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-white text-sm font-medium">Champion {i}</span>
                        <span className="text-zinc-400 text-xs">58% WR</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-zinc-400 text-xs">125 games</span>
                        <span className="text-green-500 text-xs">3.8 KDA</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#1A1A1C] rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img src="./public/lo-yellow.svg" alt="League of Legends" className="w-10 h-10 rounded-md" />
                  </div>
                  <div>
                    <h2 className="text-white text-xl font-bold">{selectedGame}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-zinc-400 text-sm">Season 14</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 text-sm">Summoner's Rift</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Button variant="outline" className="bg-[#252529] text-white border-zinc-700 hover:bg-[#2A2A2C]">
                    <div className="flex items-center">
                      <span>This Season</span>
                      <div className="ml-2 h-4 w-4">
                        <ChevronDown />
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-[#252529] mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="champions">Champions</TabsTrigger>
                  <TabsTrigger value="matches">Matches</TabsTrigger>
                  <TabsTrigger value="stats">Stats</TabsTrigger>
                  <TabsTrigger value="leaderboards">Leaderboards</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#252529] rounded-lg p-4">
                      <div className="text-zinc-400 text-sm mb-1">Rank</div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-[#1A1A1C] rounded-md p-2">
                          <img src="./public/diamannte.png" alt="Diamond Rank" className="w-12 h-12" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Diamond II</div>
                          <div className="text-zinc-400 text-sm">75 LP / 156W 112L</div>
                          <div className="text-zinc-400 text-sm">Win Rate 58%</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#252529] rounded-lg p-4">
                      <div className="text-zinc-400 text-sm mb-1">Last 20 Matches</div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="text-green-500 font-semibold">12W</div>
                        <div className="text-red-500 font-semibold">8L</div>
                        <div className="text-white font-semibold">(60%)</div>
                      </div>
                      <div className="flex space-x-1">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-full rounded-sm ${i % 3 === 0 ? "bg-red-500" : "bg-green-500"}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#252529] rounded-lg p-4">
                      <div className="text-zinc-400 text-sm mb-1">Most Played Role</div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-[#1A1A1C] rounded-md p-2">
                          <div className="h-10 w-10 text-blue-500">
                            <Shield />
                          </div>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Support</div>
                          <div className="text-zinc-400 text-sm">156 games (65%)</div>
                          <div className="text-green-500 text-sm">62% WR</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#252529] rounded-lg p-6">
                    <h3 className="text-white text-lg font-semibold mb-4">Recent Matches</h3>
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`flex items-center p-3 rounded-lg ${i % 2 === 0 ? "bg-[#1A1A1C]" : "bg-[#252529]"}`}
                        >
                          <div
                            className={`w-1 h-16 rounded-full ${i % 3 === 0 ? "bg-red-500" : "bg-green-500"} mr-4`}
                          />
                          <div className="flex-1 flex items-center">
                            <div className="flex items-center space-x-3 w-1/4">
                              <Avatar className="h-12 w-12 rounded-md">
                                <AvatarImage
                                  src={`/placeholder.svg?height=48&width=48&text=Champ${i}`}
                                  alt={`Champion ${i}`}
                                />
                                <AvatarFallback className="rounded-md">C{i}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="text-white text-sm font-medium">Champion {i}</div>
                                <div className="text-zinc-400 text-xs">Support</div>
                              </div>
                            </div>

                            <div className="w-1/4">
                              <div className="text-white text-sm font-medium">{i % 3 === 0 ? "Defeat" : "Victory"}</div>
                              <div className="text-zinc-400 text-xs">Ranked Solo</div>
                            </div>

                            <div className="w-1/4">
                              <div className="text-white text-sm font-medium">3/{i + 2}/8</div>
                              <div className="text-zinc-400 text-xs">KDA: 2.75</div>
                            </div>

                            <div className="w-1/4 text-right">
                              <div className="text-white text-sm font-medium">25m 42s</div>
                              <div className="text-zinc-400 text-xs">2 hours ago</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 text-center">
                      <Button variant="outline" className="bg-[#1A1A1C] text-white border-zinc-700 hover:bg-[#2A2A2C]">
                        Load More Matches
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="champions">
                  <div className="text-zinc-400 text-center py-12">Champions stats content would go here</div>
                </TabsContent>

                <TabsContent value="matches">
                  <div className="text-zinc-400 text-center py-12">Match history content would go here</div>
                </TabsContent>

                <TabsContent value="stats">
                  <div className="text-zinc-400 text-center py-12">Detailed stats content would go here</div>
                </TabsContent>

                <TabsContent value="leaderboards">
                  <div className="text-zinc-400 text-center py-12">Leaderboards content would go here</div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
