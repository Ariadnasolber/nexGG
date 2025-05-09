import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  ChevronDown,
  ChevronUp,
  Info,
  RefreshCw,
  Filter,
  TrendingUp,
  TrendingDown,
  Minus,
  Search,
} from "lucide-react"

// Sample champion data (sigue siendo estático, reemplázalo por Data Dragon si quieres)
const champions = [
  /* ...tu array de 20 campeones... */
  {
    id: 1,
    name: "Ahri",
    roles: ["Mid"],
    winRate: 51.2,
    pickRate: 8.5,
    banRate: 3.2,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Ahri/Ahri.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9BaHJpL0FocmkucG5nIiwiaWF0IjoxNzQ2ODAwOTM3LCJleHAiOjE3NzgzMzY5Mzd9.XBz1Iqr8-MQoeBWDs499ERojMLOGc1TuRk_TBlK6yJw",
  },
  {
    id: 2,
    name: "Yasuo",
    roles: ["Mid", "Top"],
    winRate: 48.7,
    pickRate: 12.3,
    banRate: 15.6,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Yasuo/Yasuo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9ZYXN1by9ZYXN1by5wbmciLCJpYXQiOjE3NDY4MDA5MjIsImV4cCI6MTc3ODMzNjkyMn0.Ww8AjMa8Ja72BYTouPWl1wRc_6If1XI_X0Eu9XCHBfo",
  },
  {
    id: 3,
    name: "Jinx",
    roles: ["Bot"],
    winRate: 52.4,
    pickRate: 15.1,
    banRate: 5.3,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Jinx/Jinx.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9KaW54L0ppbngucG5nIiwiaWF0IjoxNzQ2NzE1MzcyLCJleHAiOjE3NzgyNTEzNzJ9.XdPZsjXn1M6laWPuueyWr2oi6rN4JxjxsPxLvdtq078",
  },
  {
    id: 4,
    name: "Lee Sin",
    roles: ["Jungle"],
    winRate: 49.8,
    pickRate: 14.2,
    banRate: 7.8,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/LeeSin/LeeSin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9MZWVTaW4vTGVlU2luLnBuZyIsImlhdCI6MTc0NjgwMDg3NiwiZXhwIjoxNzc4MzM2ODc2fQ.fb-JFRfOWzP74wdwgTgIX1g-kokSkAjRQSXZRiB134I",
  },
  {
    id: 5,
    name: "Thresh",
    roles: ["Support"],
    winRate: 50.5,
    pickRate: 13.7,
    banRate: 4.1,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Thresh/Thresh.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9UaHJlc2gvVGhyZXNoLnBuZyIsImlhdCI6MTc0NjcxNTQ0MCwiZXhwIjoxNzc4MjUxNDQwfQ.iU4S52KA8ZtS4WpUJrlXyrJFKTuTLj3WoAha5vmZ40k",
  },
  {
    id: 6,
    name: "Darius",
    roles: ["Top"],
    winRate: 53.1,
    pickRate: 9.8,
    banRate: 12.5,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Darius/Darius.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9EYXJpdXMvRGFyaXVzLnBuZyIsImlhdCI6MTc0NjcxNTQwNiwiZXhwIjoxNzc4MjUxNDA2fQ.eKDi8yiaEAe5oI8HS9UjIo99NQNc5vibP4Nm1k0LNhg",
  },
  {
    id: 7,
    name: "Lux",
    roles: ["Mid", "Support"],
    winRate: 50.2,
    pickRate: 11.5,
    banRate: 2.8,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Lux/Lux.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9MdXgvTHV4LnBuZyIsImlhdCI6MTc0NjcxNTI3NSwiZXhwIjoxNzc4MjUxMjc1fQ.AWBEgGmulhnYgqcsIOS_saHr6-i7iLODzdBRcaMWn20",
  },
  {
    id: 8,
    name: "Zed",
    roles: ["Mid"],
    winRate: 49.5,
    pickRate: 10.2,
    banRate: 18.3,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Zed/Zed.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9aZWQvWmVkLnBuZyIsImlhdCI6MTc0NjgwMDk4NywiZXhwIjoxNzc4MzM2OTg3fQ.xT46ZStxCJKxAlUdpuHvIXKEdT4tPcKDpO-TTExStzI",
  },
  {
    id: 9,
    name: "Leona",
    roles: ["Support"],
    winRate: 51.8,
    pickRate: 7.9,
    banRate: 3.5,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Leona/Leona.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9MZW9uYS9MZW9uYS5wbmciLCJpYXQiOjE3NDY4MDA5NzEsImV4cCI6MTc3ODMzNjk3MX0.Okob675vGnECOkgc8QtdIxjCD_loORbfi22Lswf60oA",
  },
  {
    id: 10,
    name: "Garen",
    roles: ["Top"],
    winRate: 52.7,
    pickRate: 6.4,
    banRate: 1.9,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Garen/Garen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9HYXJlbi9HYXJlbi5wbmciLCJpYXQiOjE3NDY3MTU0NTUsImV4cCI6MTc3ODI1MTQ1NX0.Auctyt6RhAN6-4wtKXv-Nauno5wtheP5_v1bJn3KjEY",
  },
  {
    id: 11,
    name: "Kai'Sa",
    roles: ["Bot"],
    winRate: 50.9,
    pickRate: 16.8,
    banRate: 4.7,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Kaisa/Kaisa.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9LYWlzYS9LYWlzYS5wbmciLCJpYXQiOjE3NDY3MTUzNDQsImV4cCI6MTc3ODI1MTM0NH0.4IL4VFTMBBmQYCd2ror8v1eV6rV7yTvCt8zYTwxhakA",
  },
  {
    id: 12,
    name: "Ekko",
    roles: ["Mid", "Jungle"],
    winRate: 51.3,
    pickRate: 8.1,
    banRate: 5.2,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Ekko/Ekko.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9Fa2tvL0Vra28ucG5nIiwiaWF0IjoxNzQ2ODAxMDA5LCJleHAiOjE3NzgzMzcwMDl9.5JMYPC8PNgkRrGwrXyeNT1MbqnocPuodPnsAdGgVDgA",
  },
  {
    id: 13,
    name: "Senna",
    roles: ["Support", "Bot"],
    winRate: 49.2,
    pickRate: 9.3,
    banRate: 3.8,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Senna/Senna.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9TZW5uYS9TZW5uYS5wbmciLCJpYXQiOjE3NDY4MDEwMjUsImV4cCI6MTc3ODMzNzAyNX0.svfSCQiF03JHstt1f02BDMlNBshXtqpLl78pMmGiGbs",
  },
  {
    id: 14,
    name: "Yone",
    roles: ["Mid", "Top"],
    winRate: 47.8,
    pickRate: 11.7,
    banRate: 14.2,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Yone/Yone.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9Zb25lL1lvbmUucG5nIiwiaWF0IjoxNzQ2ODAxMDY3LCJleHAiOjE3NzgzMzcwNjd9.jHIcHDwWAmd3knGnPWgncHsTRCvWXnpCctZm0-SO5mI",
  },
  {
    id: 15,
    name: "Pyke",
    roles: ["Support"],
    winRate: 48.5,
    pickRate: 7.6,
    banRate: 8.9,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Pyke/Pyke.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9QeWtlL1B5a2UucG5nIiwiaWF0IjoxNzQ2ODAxMDUxLCJleHAiOjE3NzgzMzcwNTF9.BaKNkUj1tXbRDnXvJIzTpLMxv3XCHVrrRyS9bSLm9s0",
  },
  {
    id: 16,
    name: "Sett",
    roles: ["Top"],
    winRate: 52.3,
    pickRate: 8.9,
    banRate: 6.1,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Sett/Sett.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9TZXR0L1NldHQucG5nIiwiaWF0IjoxNzQ2ODAxMDgzLCJleHAiOjE3NzgzMzcwODN9.pzsLTk5IDsAf2qzajzg3WGpMcYa73fBaI8u8nw7ND74",
  },
  {
    id: 17,
    name: "Lulu",
    roles: ["Support"],
    winRate: 53.4,
    pickRate: 10.5,
    banRate: 7.3,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Lulu/Lulu.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9MdWx1L0x1bHUucG5nIiwiaWF0IjoxNzQ2NzE1MzI0LCJleHAiOjE3NzgyNTEzMjR9.0_nCaVlow2d0n47a9hfxGrsz-uWmBt5Xb4uO34EkPvg",
  },
  {
    id: 18,
    name: "Viego",
    roles: ["Jungle"],
    winRate: 49.7,
    pickRate: 9.1,
    banRate: 5.8,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Viego/Viego.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9WaWVnby9WaWVnby5wbmciLCJpYXQiOjE3NDY4MDEwOTgsImV4cCI6MTc3ODMzNzA5OH0.0MmdNSNXbjxMZIgbHT6kXnpqIHCkF_PAml_Z3i86734",
  },
  {
    id: 19,
    name: "Samira",
    roles: ["Bot"],
    winRate: 50.1,
    pickRate: 8.3,
    banRate: 9.5,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Samira/Samira.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9TYW1pcmEvU2FtaXJhLnBuZyIsImlhdCI6MTc0NjgwMTEyMywiZXhwIjoxNzc4MzM3MTIzfQ.-YGS7NO9n4w6vo8oyeFIashf9H5mMo-_GT6SI_E5hOU",
  },
  {
    id: 20,
    name: "Sylas",
    roles: ["Mid"],
    winRate: 48.9,
    pickRate: 10.8,
    banRate: 8.2,
    splash: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Sylas/Sylas.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9TeWxhcy9TeWxhcy5wbmciLCJpYXQiOjE3NDY4MDExMzcsImV4cCI6MTc3ODMzNzEzN30.JJoSSr0-k7QMyO1lpVAFxUaCxX5JXdND5bH76Q6Ej8c",
  },
]

// Conditionally join class names
const cn = (...classes) => classes.filter(Boolean).join(" ")

// Simula actualización de estadísticas
async function updateChampionStats(region, rank) {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  champions.forEach((champ) => {
    const change = parseFloat((Math.random() * 4 - 2).toFixed(1))
    champ.winRate = Math.min(Math.max(champ.winRate + change, 40), 60)
    champ.winRateChange = change
    champ.pickRate = Math.min(Math.max(champ.pickRate + (Math.random() * 2 - 1), 0.5), 30)
    if (champ.banRate != null) champ.banRate = Math.min(Math.max(champ.banRate + (Math.random() * 2 - 1), 0), 50)
  })
  return { success: true }
}

export default function Tierlist() {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState("All")
  const [selectedRegion, setSelectedRegion] = useState("Global")
  const [selectedRank, setSelectedRank] = useState("All Ranks")
  const [searchQuery, setSearchQuery] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [filteredChampions, setFilteredChampions] = useState(champions)

  const roles = ["All", "Top", "Jungle", "Mid", "Bot", "Support"]
  const regions = ["Global", "NA", "EUW", "KR", "CN"]
  const ranks = [
    "All Ranks",
    "Iron",
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Master+",
  ]

  // Filtrado
  useEffect(() => {
    let filtered = [...champions]
    if (selectedRole !== "All") {
      filtered = filtered.filter((c) => c.roles.includes(selectedRole))
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter((c) => c.name.toLowerCase().includes(q))
    }
    filtered.sort((a, b) => b.winRate - a.winRate)
    setFilteredChampions(filtered)
  }, [selectedRole, selectedRegion, selectedRank, searchQuery])

  // Tiers
  const tierS = filteredChampions.filter((c) => c.winRate > 52)
  const tierA = filteredChampions.filter((c) => c.winRate > 50 && c.winRate <= 52)
  const tierB = filteredChampions.filter((c) => c.winRate > 48 && c.winRate <= 50)
  const tierC = filteredChampions.filter((c) => c.winRate <= 48)
  const tiers = [
    { name: "S", color: "#FF4E50", champions: tierS },
    { name: "A", color: "#FC913A", champions: tierA },
    { name: "B", color: "#F9D423", champions: tierB },
    { name: "C", color: "#99B898", champions: tierC },
  ]

  const handleUpdateStats = async () => {
    setIsUpdating(true)
    await updateChampionStats(selectedRegion, selectedRank)
    setLastUpdated(new Date())
    setIsUpdating(false)
  }

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      {/* Hero */}
      <div
        className="relative h-[300px] bg-cover bg-no-repeat bg-[center_22%] flex items-center justify-center flex-col text-center"
        style={{ backgroundImage: "url('/high-noon-yone.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 px-4 py-2">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
            LoL Tier List
          </h1>
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            Champion tier list based on win rate, pick rate, and ban rate data.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Controles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <FilterDropdown
              label="Role"
              options={roles}
              selected={selectedRole}
              setSelected={setSelectedRole}
            />
            <FilterDropdown
              label="Region"
              options={regions}
              selected={selectedRegion}
              setSelected={setSelectedRegion}
            />
            <FilterDropdown
              label="Rank"
              options={ranks}
              selected={selectedRank}
              setSelected={setSelectedRank}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <SearchBar
              placeholder="Search champions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-[200px]"
            />
            <button
              onClick={handleUpdateStats}
              disabled={isUpdating}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border",
                isUpdating
                  ? "opacity-50 cursor-not-allowed bg-gray-700"
                  : "bg-[#1A1F2A] border-gray-800 hover:bg-gray-800"
              )}
            >
              <RefreshCw
                size={16}
                className={cn(isUpdating && "animate-spin")}
              />
              Update Stats
            </button>
          </div>
        </div>

        {/* Última actualización */}
        <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm">
          <Info size={16} />
          <span>
            Last updated: {lastUpdated.toLocaleString()}
          </span>
        </div>

        {/* Tier list */}
        <div className="space-y-4">
          {tiers.map((tier) => (
            <TierRow
              key={tier.name}
              tier={tier.name}
              color={tier.color}
              champions={tier.champions}
            />
          ))}
          {filteredChampions.length === 0 && (
            <div className="text-center text-gray-400">
              No champions found matching your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Filter dropdown
function FilterDropdown({ label, options, selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-[#1A1F2A] border border-gray-800 rounded-md hover:bg-gray-800"
      >
        <Filter size={14} />
        <span>{label}: {selected}</span>
        <ChevronDown size={14} />
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-40 bg-[#1A1F2A] border border-gray-800 rounded-md shadow-lg z-10">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setSelected(opt)
                setIsOpen(false)
              }}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm hover:bg-gray-700",
                selected === opt && "bg-gray-700 font-medium"
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Tier row
function TierRow({ tier, color, champions }) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="border border-gray-800 rounded-md overflow-hidden">
      <div
        className="flex items-center bg-[#1A1F2A] px-4 py-2 cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        <div
          className="w-12 h-12 flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {tier}
        </div>
        <div className="ml-4 flex-1 flex items-center justify-between">
          <span>
            {champions.length} Champion{champions.length !== 1 && "s"}
          </span>
          <span className="text-gray-400">
            {tier === "S"
              ? "Overpowered"
              : tier === "A"
              ? "Strong"
              : tier === "B"
              ? "Balanced"
              : "Weak"}
          </span>
          {collapsed ? <ChevronDown /> : <ChevronUp />}
        </div>
      </div>
      {!collapsed && (
        <div className="grid grid-cols-6 gap-4 p-4 bg-[#282A2F]">
          {champions.map((c) => (
            <ChampionCard key={c.id} champion={c} />
          ))}
        </div>
      )}
    </div>
  )
}

// Champion card
function ChampionCard({ champion }) {
  const trendIcon = champion.winRateChange > 0
    ? <TrendingUp className="text-green-400" />
    : champion.winRateChange < 0
    ? <TrendingDown className="text-red-400" />
    : <Minus />
  return (
    <div className="relative flex flex-col w-[85px] bg-[#111827] rounded-md overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={champion.splash}
        alt={champion.name}
        className="w-full h-[85px] object-cover object-center"
      />
      <div className="p-2 text-center space-y-1">
        <div className="text-xs font-medium truncate">{champion.name}</div>
        <div className="flex justify-between text-[10px]">
          <span className="text-green-400">{champion.winRate}%</span>
          {trendIcon}
          <span className="text-blue-400">{champion.pickRate}%</span>
        </div>
      </div>
    </div>
  )
}

// Search bar
function SearchBar({ placeholder, value, onChange, className = "" }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search size={16} className="text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 bg-[#1A1F2A] border border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
      />
    </div>
  )
}
