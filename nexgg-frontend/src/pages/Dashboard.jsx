import React, { useState } from "react";
import { Link } from "react-router-dom";

// Componentes de iconos
const Lightning = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
    <path d="m13 12-3 5h4l-1 4 3-5h-4l1-4Z" />
  </svg>
);

const Users = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BarChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);

const Shield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const Settings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Bell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const Flag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" x2="4" y1="22" y2="15" />
  </svg>
);

const Edit = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const Trash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const Eye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Plus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

// Componentes UI personalizados
const Avatar = ({ children, className }) => (
  <div className={`relative inline-block ${className}`}>
    {children}
  </div>
);

const AvatarImage = ({ src, alt }) => (
  <img src={src || "/https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Leona/Leona.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9MZW9uYS9MZW9uYS5wbmciLCJpYXQiOjE3NDczMzE2NjEsImV4cCI6MTc3ODg2NzY2MX0.lpJsS55ggGs1_HYk45X0BGkQZXPneuNNNTZZt_SWTbM"} alt={alt} className="h-full w-full object-cover" />
);

const AvatarFallback = ({ children, className }) => (
  <div className={`flex h-full w-full items-center justify-center bg-gray-700 text-white ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className, variant, onClick }) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium focus:outline-none transition-colors";
  const variantClasses = variant === "outline" 
    ? "border border-gray-700 bg-[#1A1A1C] text-white hover:bg-[#2A2A2C]" 
    : "bg-[#ff7762] text-white hover:bg-[#ff6a52]";
  
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const Card = ({ children, className }) => (
  <div className={`bg-[#1A1A1C] rounded-lg p-6 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = "default" }) => {
  const variantClasses = 
    variant === "success" ? "bg-green-500 bg-opacity-20 text-green-500" :
    variant === "warning" ? "bg-yellow-500 bg-opacity-20 text-yellow-500" :
    variant === "danger" ? "bg-red-500 bg-opacity-20 text-red-500" :
    variant === "info" ? "bg-blue-500 bg-opacity-20 text-blue-500" :
    "bg-gray-500 bg-opacity-20 text-gray-500";
  
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${variantClasses}`}>
      {children}
    </span>
  );
};

export default function AdminDashboard() {
  // Datos de ejemplo para el dashboard
  const stats = {
    totalUsers: 2458963,
    activeUsers: 856321,
    newUsers: 12543,
    totalMatches: 45689321,
    dailyMatches: 1245632,
    reportedContent: 342,
    pendingReviews: 87,
    systemHealth: 98.7
  };
  
  const recentUsers = [
    { id: 1, username: "ProGamer123", email: "progamer@example.com", status: "active", registeredDate: "2023-10-01", lastLogin: "2 hours ago" },
    { id: 2, username: "GamerGirl456", email: "gamergirl@example.com", status: "active", registeredDate: "2023-09-28", lastLogin: "5 hours ago" },
    { id: 3, username: "NoobMaster69", email: "noobmaster@example.com", status: "suspended", registeredDate: "2023-09-25", lastLogin: "1 day ago" },
    { id: 4, username: "ProSniper", email: "prosniper@example.com", status: "active", registeredDate: "2023-09-22", lastLogin: "3 hours ago" },
    { id: 5, username: "ToxicPlayer", email: "toxic@example.com", status: "banned", registeredDate: "2023-09-20", lastLogin: "5 days ago" }
  ];
  
  const reportedContent = [
    { id: 1, type: "User Profile", reportedBy: "User123", reason: "Inappropriate Content", date: "2023-10-02", status: "pending" },
    { id: 2, type: "Chat Message", reportedBy: "Player456", reason: "Harassment", date: "2023-10-02", status: "pending" },
    { id: 3, type: "Username", reportedBy: "Gamer789", reason: "Offensive Name", date: "2023-10-01", status: "reviewed" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0C] text-white">
      {/* Header */}
      <header className="bg-[#1A1A1C] border-b border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-[#ff7762] mr-2">
                <Lightning />
              </div>
              <h1 className="text-xl font-bold">Blitz Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">
                <Bell />
              </button>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Panel de Administración</h2>
          <div className="flex space-x-2">
            <Button variant="outline">
              <div className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Configuración</span>
              </div>
            </Button>
            <Button>
              <div className="flex items-center">
                <Plus className="mr-2 h-4 w-4" />
                <span>Nuevo Campeón</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="flex items-center">
            <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Usuarios</p>
              <h3 className="text-xl font-bold">{stats.totalUsers.toLocaleString()}</h3>
              <p className="text-green-500 text-xs">+{stats.newUsers.toLocaleString()} esta semana</p>
            </div>
          </Card>
          
          <Card className="flex items-center">
            <div className="bg-green-500 bg-opacity-20 p-3 rounded-lg mr-4">
              <BarChart className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Partidas Diarias</p>
              <h3 className="text-xl font-bold">{stats.dailyMatches.toLocaleString()}</h3>
              <p className="text-gray-400 text-xs">{stats.totalMatches.toLocaleString()} total</p>
            </div>
          </Card>
          
          <Card className="flex items-center">
            <div className="bg-red-500 bg-opacity-20 p-3 rounded-lg mr-4">
              <Flag className="h-6 w-6 text-red-500" />
            </div>
           
          </Card>
          
          <Card className="flex items-center">
            <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg mr-4">
              <Shield className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Salud del Sistema</p>
              <h3 className="text-xl font-bold">{stats.systemHealth}%</h3>
              <p className="text-green-500 text-xs">Todos los sistemas operativos</p>
            </div>
          </Card>
        </div>

        {/* Recent Users */}
        <Card className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Usuarios Recientes</h3>
            <Link to="/admin/users" className="text-[#ff7762] text-sm hover:underline">
              Ver Todos
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-800">
                  <th className="pb-3 pl-4">Usuario</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Estado</th>
                  <th className="pb-3">Registro</th>
                  <th className="pb-3">Último Login</th>
                  <th className="pb-3 text-right pr-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.slice(0, 3).map((user) => (
                  <tr key={user.id} className="border-b border-gray-800 hover:bg-[#252529]">
                    <td className="py-4 pl-4">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 rounded-full mr-3">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${user.username.charAt(0)}`} alt={user.username} />
                          <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.username}</span>
                      </div>
                    </td>
                    <td className="py-4">{user.email}</td>
                    <td className="py-4">
                      <Badge 
                        variant={
                          user.status === "active" ? "success" : 
                          user.status === "suspended" ? "warning" : "danger"
                        }
                      >
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-4">{user.registeredDate}</td>
                    <td className="py-4">{user.lastLogin}</td>
                    <td className="py-4 text-right pr-4">
                      <div className="flex justify-end space-x-2">
                        <button className="p-1 text-gray-400 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-blue-500">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-500">
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

      

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-[#1A1A1C] to-[#252529] hover:from-[#252529] hover:to-[#303035] transition-colors cursor-pointer">
            <div className="flex items-center">
              <div className="bg-[#ff7762] bg-opacity-20 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-[#ff7762]" />
              </div>
              <div>
                <h3 className="font-bold">Gestionar Usuarios</h3>
                <p className="text-gray-400 text-sm mt-1">Administrar cuentas y permisos</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-[#1A1A1C] to-[#252529] hover:from-[#252529] hover:to-[#303035] transition-colors cursor-pointer">
            <div className="flex items-center">
              <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-4">
                <Edit className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold">Editar Campeones</h3>
                <p className="text-gray-400 text-sm mt-1">Actualizar información y estadísticas</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-[#1A1A1C] to-[#252529] hover:from-[#252529] hover:to-[#303035] transition-colors cursor-pointer">
            <div className="flex items-center">
              <div className="bg-green-500 bg-opacity-20 p-3 rounded-lg mr-4">
                <Settings className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold">Configuración</h3>
                <p className="text-gray-400 text-sm mt-1">Ajustes del sistema y mantenimiento</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}