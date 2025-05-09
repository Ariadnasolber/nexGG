"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronDown, Search, Filter, Gamepad2, Shield, Sword, Zap, Clock, Star, Info, RefreshCw } from "lucide-react"

// Simple utility function to conditionally join classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

// Sample champion data (using the same champions from the tier list)
const champions = [
  {
    id: 1,
    name: "Ahri",
    roles: ["Mid"],
    winRate: 51.2,
    pickRate: 8.5,
    splash:
      "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Ahri/Ahri.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9BaHJpL0FocmkucG5nIiwiaWF0IjoxNzQ2ODAwOTM3LCJleHAiOjE3NzgzMzY5Mzd9.XBz1Iqr8-MQoeBWDs499ERojMLOGc1TuRk_TBlK6yJw",
  },
  {
    id: 2,
    name: "Yasuo",
    roles: ["Mid", "Top"],
    winRate: 48.7,
    pickRate: 12.3,
    splash:
      "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Yasuo/Yasuo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9ZYXN1by9ZYXN1by5wbmciLCJpYXQiOjE3NDY4MDA5MjIsImV4cCI6MTc3ODMzNjkyMn0.Ww8AjMa8Ja72BYTouPWl1wRc_6If1XI_X0Eu9XCHBfo",
  },
  {
    id: 3,
    name: "Jinx",
    roles: ["Bot"],
    winRate: 52.4,
    pickRate: 15.1,
    splash:
      "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Jinx/Jinx.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9KaW54L0ppbngucG5nIiwiaWF0IjoxNzQ2NzE1MzcyLCJleHAiOjE3NzgyNTEzNzJ9.XdPZsjXn1M6laWPuueyWr2oi6rN4JxjxsPxLvdtq078",
  },
  {
    id: 4,
    name: "Lee Sin",
    roles: ["Jungle"],
    winRate: 49.8,
    pickRate: 14.2,
    splash:
      "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/LeeSin/LeeSin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9MZWVTaW4vTGVlU2luLnBuZyIsImlhdCI6MTc0NjgwMDg3NiwiZXhwIjoxNzc4MzM2ODc2fQ.fb-JFRfOWzP74wdwgTgIX1g-kokSkAjRQSXZRiB134I",
  },
  {
    id: 5,
    name: "Thresh",
    roles: ["Support"],
    winRate: 50.5,
    pickRate: 13.7,
    splash:
      "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Thresh/Thresh.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9UaHJlc2gvVGhyZXNoLnBuZyIsImlhdCI6MTc0NjcxNTQ0MCwiZXhwIjoxNzc4MjUxNDQwfQ.iU4S52KA8ZtS4WpUJrlXyrJFKTuTLj3WoAha5vmZ40k",
  },
  {
    id: 6,
    name: "Darius",
    roles: ["Top"],
    winRate: 53.1,
    pickRate: 9.8,
    splash:
      "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Darius/Darius.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9EYXJpdXMvRGFyaXVzLnBuZyIsImlhdCI6MTc0NjcxNTQwNiwiZXhwIjoxNzc4MjUxNDA2fQ.eKDi8yiaEAe5oI8HS9UjIo99NQNc5vibP4Nm1k0LNhg",
  },
]

// Sample items data
const items = {
  mythic: [
    {
      id: 1,
      name: "Luden's Echo",
      image: "/placeholder.svg?height=40&width=40",
      description: "Grants ability power and magic penetration",
    },
    {
      id: 2,
      name: "Kraken Slayer",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/crakens.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL2NyYWtlbnMucG5nIiwiaWF0IjoxNzQ2ODEwMzkyLCJleHAiOjE3NzgzNDYzOTJ9._7TUoXfcmMmda7moUY-cN93PnKVKHnkUNLAzNlBswJ0",
      description: "Deals true damage every third attack",
    },
    {
      id: 3,
      name: "Divine Sunderer",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/divine%20sunderer.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL2RpdmluZSBzdW5kZXJlci5wbmciLCJpYXQiOjE3NDY4MTAzNDMsImV4cCI6MTc3ODM0NjM0M30.c-_-q_UZF9vyJTH-oogFvl28ntLg7cYudh7zKnTtjSk",
      description: "Heals and deals bonus damage based on target's max health",
    },
    {
      id: 4,
      name: "Locket of the Iron Solari",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/solari.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL3NvbGFyaS5wbmciLCJpYXQiOjE3NDY4MDk4OTAsImV4cCI6MTc3ODM0NTg5MH0.-2IJvoU7UeccOqTduuosHXSRyZ9UL1C3xICLueuvwwI",
      description: "Grants an aura of bonus resistances",
    },
  ],
  legendary: [
    {
      id: 5,
      name: "Rabadon's Deathcap",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/sombrero.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL3NvbWJyZXJvLnBuZyIsImlhdCI6MTc0NjgwOTI0NCwiZXhwIjoxNzc4MzQ1MjQ0fQ.3ETdpDUEHQaiBxl92HBmvJAq49FzgbzMN7Wno4uS9L4",
      description: "Increases ability power by 35%",
    },
    {
      id: 6,
      name: "Infinity Edge",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/filo%20infinito.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL2ZpbG8gaW5maW5pdG8ucG5nIiwiaWF0IjoxNzQ2ODA4MjE2LCJleHAiOjE3NzgzNDQyMTZ9.Scy2dMfBcEQtXrkmjTzaziDhWCMwQQtiS_qNaGVg3lE",
      description: "Increases critical strike damage",
    },
    {
      id: 7,
      name: "Thornmail",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/malla%20de%20espinas.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL21hbGxhIGRlIGVzcGluYXMucG5nIiwiaWF0IjoxNzQ2ODA5ODQ4LCJleHAiOjE3NzgzNDU4NDh9.yZAjE9dpGh7CNPOKuyuT14uF34NpX5-NeJrInAEfMJ8",
      description: "Reflects damage to attackers",
    },
    {
      id: 8,
      name: "Zhonya's Hourglass",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/zhonya.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL3pob255YS5wbmciLCJpYXQiOjE3NDY4MDkxODUsImV4cCI6MTc3ODM0NTE4NX0.Iiet_hTJ66L4b6WZK1mgEGqTK6r9P9OVD-UxmAt-Cb0",
      description: "Activate to become invulnerable but unable to move",
    },
    {
      id: 9,
      name: "Void Staff",
      image: "/placeholder.svg?height=40&width=40",
      description: "Grants magic penetration",
    },
    { id: 10, name: "Bloodthirster", image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/sanguinaria.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL3Nhbmd1aW5hcmlhLnBuZyIsImlhdCI6MTc0NjgwOTM4NSwiZXhwIjoxNzc4MzQ1Mzg1fQ.MCd6B6jsro30Gv6pegA0lZkoCshTsd3NH3Njw5bhzL8", description: "Grants lifesteal" },
  ],
  boots: [
    {
      id: 11,
      name: "Sorcerer's Shoes",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/sorcerer%20shoes.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL3NvcmNlcmVyIHNob2VzLnBuZyIsImlhdCI6MTc0NjgwODE3MCwiZXhwIjoxNzc4MzQ0MTcwfQ.rAmSitT7twmnNNpmTcqcVYLnxL_8UFN7D6gzR_VsicE",
      description: "Grants magic penetration",
    },
    {
      id: 12,
      name: "Berserker's Greaves",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/berseker%20boots.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL2JlcnNla2VyIGJvb3RzLnBuZyIsImlhdCI6MTc0NjgwNjA3NSwiZXhwIjoxNzc4MzQyMDc1fQ.naHHVzmr2sxCe3ccxcO2f35NXDeGjLc6IESFxSkyntI",
      description: "Grants attack speed",
    },
     {
      id: 13,
      name: "Mercurys's Shoes",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/mercury.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL21lcmN1cnkucG5nIiwiaWF0IjoxNzQ2ODEwNDY0LCJleHAiOjE3NzgzNDY0NjR9._AGVwUE2yIL9OxobsXGwh5NdnTA50snn9NzjBwiqNHU",
      description: "Grants magic resistance",
    },
    {
      id: 14,
      name: "Ninja Tabi",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/items/tavi%20ninja.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2l0ZW1zL3RhdmkgbmluamEucG5nIiwiaWF0IjoxNzQ2ODA2MTIyLCJleHAiOjE3NzgzNDIxMjJ9.l_lF__1idoVK-p835X4e9D0C0V3q4z72Ys_NuOChR2Q",
      description: "Reduces damage from attacks",
    },
  ],
}

// Sample runes data
const runes = {
  keystone: [
    {
      id: 1,
      name: "Conqueror",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/runes/Precision/Conqueror.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3J1bmVzL1ByZWNpc2lvbi9Db25xdWVyb3IucG5nIiwiaWF0IjoxNzQ2ODA3OTAzLCJleHAiOjE3NzgzNDM5MDN9.88lFC_2nQFlkVh8j4RT9zqi8hZidH3lRBtX2-7Vv65c",
      description: "Gain stacks of adaptive force when attacking enemy champions",
    },
    {
      id: 2,
      name: "Electrocute",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/runes/Domination/Electrocute.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3J1bmVzL0RvbWluYXRpb24vRWxlY3Ryb2N1dGUucG5nIiwiaWF0IjoxNzQ2ODA3ODQxLCJleHAiOjE3NzgzNDM4NDF9.NkWLj9rEOOvY5lj0tdaE9dA5BKRhGeO6-Pjv4YG_tKA",
      description: "Hitting a champion with 3 separate attacks or abilities deals bonus adaptive damage",
    },
    {
      id: 3,
      name: "Arcane Comet",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/runes/Sorcery/ArcaneComet.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3J1bmVzL1NvcmNlcnkvQXJjYW5lQ29tZXQucG5nIiwiaWF0IjoxNzQ2ODA3ODc5LCJleHAiOjE3NzgzNDM4Nzl9.KDVCj6mi6JrVYjoHm_6L2a5_MxA4hScO_tlw0y5W5XE",
      description: "Damaging a champion with an ability hurls a comet at their location",
    },
    {
      id: 4,
      name: "Grasp of the Undying",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/runes/Resolve/GraspOfTheUndying.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3J1bmVzL1Jlc29sdmUvR3Jhc3BPZlRoZVVuZHlpbmcucG5nIiwiaWF0IjoxNzQ2ODA3OTg1LCJleHAiOjE3NzgzNDM5ODV9.b8ICCw3OkAmC0j59LGQABkP4lUhxqjeYyOWzQXHbgaw",
      description: "Every 4 seconds, your next attack on a champion deals bonus magic damage",
    },
  ],
  secondary: [
    {
      id: 5,
      name: "Domination",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/runes/Domination/icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3J1bmVzL0RvbWluYXRpb24vaWNvbi5wbmciLCJpYXQiOjE3NDY4MDc3MjAsImV4cCI6MTc3ODM0MzcyMH0.BV1EpbTeQNmcrWsANkzUjy153aI9DMWPXf1XfkML2Yc",
      description: "Focuses on burst damage and target access",
    },
    {
      id: 6,
      name: "Precision",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/runes/Precision/icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3J1bmVzL1ByZWNpc2lvbi9pY29uLnBuZyIsImlhdCI6MTc0NjgwNzczNSwiZXhwIjoxNzc4MzQzNzM1fQ.NN_H1yX-8IDQ-gJ1cfbgl8TIIr4JSovpBIyDeqCuZIM",
      description: "Focuses on sustained damage and dueling",
    },
    {
      id: 7,
      name: "Sorcery",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/runes/Sorcery/icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3J1bmVzL1NvcmNlcnkvaWNvbi5wbmciLCJpYXQiOjE3NDY4MDc3NTIsImV4cCI6MTc3ODM0Mzc1Mn0.N2e1oCZmQ_iqcNxDR7l6nWGX_XbLpyCgQM29TcEt3CQ",
      description: "Focuses on ability empowerment and resource manipulation",
    },
    {
      id: 8,
      name: "Resolve",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/runes/Resolve/icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3J1bmVzL1Jlc29sdmUvaWNvbi5wbmciLCJpYXQiOjE3NDY4MDc3NjgsImV4cCI6MTc3ODM0Mzc2OH0.OC6d7-tvGcDWbw9oUfy1XD4LQBpztgd6zR5YGuV1NvA",
      description: "Focuses on durability and crowd control",
    },
    {
      id: 9,
      name: "Inspiration",
      image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/runes/Inspiration/icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3J1bmVzL0luc3BpcmF0aW9uL2ljb24ucG5nIiwiaWF0IjoxNzQ2ODA3NjM5LCJleHAiOjE3NzgzNDM2Mzl9.XqA8UD2RKAZTf6faIfBjXgELBqnqitxUStM5PzfnNt8",
      description: "Focuses on creative tools and rule-bending",
    },
  ],
}

// Sample summoner spells
const summonerSpells = [
  {
    id: 1,
    name: "Flash",
    image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/summoner-spells/SummonerCherryFlash.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3N1bW1vbmVyLXNwZWxscy9TdW1tb25lckNoZXJyeUZsYXNoLnBuZyIsImlhdCI6MTc0NjgwNjc5MSwiZXhwIjoxNzc4MzQyNzkxfQ.er1OginrJg1VjiLSqDUD998S4FqPMPqjRfmpJRkvwow",
    description: "Teleports your champion a short distance",
  },
  {
    id: 2,
    name: "Ignite",
    image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/summoner-spells/SummonerDot.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3N1bW1vbmVyLXNwZWxscy9TdW1tb25lckRvdC5wbmciLCJpYXQiOjE3NDY4MDY4MTYsImV4cCI6MTc3ODM0MjgxNn0.S5693uUzFMHZBqVhOcAOiTiAIjZYiOvPxB8eWBJX2io",
    description: "Deals true damage over time and reduces healing",
  },
  {
    id: 3,
    name: "Teleport",
    image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/summoner-spells/SummonerTeleport.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3N1bW1vbmVyLXNwZWxscy9TdW1tb25lclRlbGVwb3J0LnBuZyIsImlhdCI6MTc0NjgwNjk5MCwiZXhwIjoxNzc4MzQyOTkwfQ.93OPgiF5XZRHu6WddpM9NRWKD2boil-TqaTW9wLheCc",
    description: "Teleports your champion to target allied structure or minion",
  },
  {
    id: 4,
    name: "Heal",
    image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/summoner-spells/SummonerHeal.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3N1bW1vbmVyLXNwZWxscy9TdW1tb25lckhlYWwucG5nIiwiaWF0IjoxNzQ2ODA2OTQ1LCJleHAiOjE3NzgzNDI5NDV9.ChXuZBsEBGLN8h2tJAvk20Qy5cjD6MV4duh7N0RAQFw",
    description: "Restores health to your champion and a nearby ally",
  },
  {
    id: 5,
    name: "Exhaust",
    image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/summoner-spells/SummonerExhaust.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3N1bW1vbmVyLXNwZWxscy9TdW1tb25lckV4aGF1c3QucG5nIiwiaWF0IjoxNzQ2ODA2NzYyLCJleHAiOjE3NzgzNDI3NjJ9.ytecCkOMQXSjhf9kPBGUGz73iFPObr7eTAop0Th4lA0",
    description: "Reduces target enemy champion's damage dealt and movement speed",
  },
  {
    id: 6,
    name: "Barrier",
    image: "https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/summoner-spells/SummonerBarrier.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL3N1bW1vbmVyLXNwZWxscy9TdW1tb25lckJhcnJpZXIucG5nIiwiaWF0IjoxNzQ2ODA3MDA5LCJleHAiOjE3NzgzNDMwMDl9.iUJtEW7XXkMb6LkJ-fgfXkXoj6_FWNLIZFd1w0E5Tsc",
    description: "Shields your champion from damage",
  },
]

// Sample builds data
const championBuilds = [
  {
    championId: 1, // Ahri
    role: "Mid",
    title: "Standard AP Burst",
    winRate: 54.2,
    pickRate: 65.3,
    difficulty: "Medium",
    patch: "14.10",
    items: {
      starter: [5, 8],
      core: [1, 5, 9],
      boots: 11,
      situational: [8, 7],
    },
    runes: {
      primary: 2,
      secondary: 7,
    },
    summonerSpells: [1, 2],
    skillOrder: ["Q", "W", "E"],
    playstyle:
      "Focus on landing your charm (E) to set up your full combo. Use your ultimate to reposition in teamfights and chase down low-health targets.",
    counters: {
      strong: ["Veigar", "Lux", "Twisted Fate"],
      weak: ["Zed", "Yasuo", "LeBlanc"],
    },
  },
  {
    championId: 1, // Ahri
    role: "Mid",
    title: "Utility Mage",
    winRate: 51.8,
    pickRate: 25.7,
    difficulty: "Medium",
    patch: "14.10",
    items: {
      starter: [5, 8],
      core: [1, 8, 9],
      boots: 11,
      situational: [5, 7],
    },
    runes: {
      primary: 3,
      secondary: 8,
    },
    summonerSpells: [1, 5],
    skillOrder: ["E", "Q", "W"],
    playstyle:
      "Focus on providing utility for your team with your charm. Prioritize survivability and cooldown reduction.",
    counters: {
      strong: ["Veigar", "Lux", "Twisted Fate"],
      weak: ["Zed", "Yasuo", "LeBlanc"],
    },
  },
  {
    championId: 2, // Yasuo
    role: "Mid",
    title: "Crit Carry",
    winRate: 52.1,
    pickRate: 78.4,
    difficulty: "Hard",
    patch: "14.10",
    items: {
      starter: [6, 10],
      core: [2, 6, 10],
      boots: 12,
      situational: [7, 10],
    },
    runes: {
      primary: 1,
      secondary: 6,
    },
    summonerSpells: [1, 2],
    skillOrder: ["Q", "E", "W"],
    playstyle:
      "Focus on farming safely until you get your core items. Look for opportunities to engage with your tornado and ultimate.",
    counters: {
      strong: ["Veigar", "Lux", "Twisted Fate"],
      weak: ["Renekton", "Annie", "Malzahar"],
    },
  },
  {
    championId: 3, // Jinx
    role: "Bot",
    title: "Hypercarry ADC",
    winRate: 53.5,
    pickRate: 82.1,
    difficulty: "Medium",
    patch: "14.10",
    items: {
      starter: [6, 10],
      core: [2, 6, 10],
      boots: 12,
      situational: [10, 6],
    },
    runes: {
      primary: 1,
      secondary: 5,
    },
    summonerSpells: [1, 4],
    skillOrder: ["Q", "W", "E"],
    playstyle:
      "Farm safely in the early game and scale into a late-game hypercarry. Use your rockets for AOE damage in teamfights.",
    counters: {
      strong: ["Kog'Maw", "Twitch", "Aphelios"],
      weak: ["Draven", "Samira", "Lucian"],
    },
  },
  {
    championId: 4, // Lee Sin
    role: "Jungle",
    title: "Early Game Pressure",
    winRate: 50.8,
    pickRate: 72.3,
    difficulty: "Hard",
    patch: "14.10",
    items: {
      starter: [],
      core: [3, 7, 10],
      boots: 13,
      situational: [7, 10],
    },
    runes: {
      primary: 1,
      secondary: 5,
    },
    summonerSpells: [1, 3],
    skillOrder: ["Q", "W", "E"],
    playstyle: "Focus on early game pressure and ganks. Look for opportunities to make plays with your Q and ultimate.",
    counters: {
      strong: ["Amumu", "Sejuani", "Zac"],
      weak: ["Udyr", "Olaf", "Warwick"],
    },
  },
  {
    championId: 5, // Thresh
    role: "Support",
    title: "Engage Support",
    winRate: 51.2,
    pickRate: 68.9,
    difficulty: "Hard",
    patch: "14.10",
    items: {
      starter: [],
      core: [4, 7, 8],
      boots: 14,
      situational: [7, 8],
    },
    runes: {
      primary: 4,
      secondary: 8,
    },
    summonerSpells: [1, 5],
    skillOrder: ["Q", "E", "W"],
    playstyle:
      "Look for opportunities to land your hook and engage for your team. Use your lantern to save allies and provide utility.",
    counters: {
      strong: ["Sona", "Soraka", "Yuumi"],
      weak: ["Morgana", "Alistar", "Leona"],
    },
  },
  {
    championId: 6, // Darius
    role: "Top",
    title: "Bruiser",
    winRate: 52.7,
    pickRate: 75.6,
    difficulty: "Medium",
    patch: "14.10",
    items: {
      starter: [],
      core: [3, 7, 10],
      boots: 13,
      situational: [7, 10],
    },
    runes: {
      primary: 1,
      secondary: 8,
    },
    summonerSpells: [1, 3],
    skillOrder: ["Q", "E", "W"],
    playstyle:
      "Dominate the lane with your strong early game. Look to stack your passive in teamfights and execute multiple targets.",
    counters: {
      strong: ["Garen", "Maokai", "Malphite"],
      weak: ["Vayne", "Quinn", "Jayce"],
    },
  },
]

export default function Builds() {
  const navigate = useNavigate()
  const [selectedChampion, setSelectedChampion] = useState(null)
  const [selectedRole, setSelectedRole] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredChampions, setFilteredChampions] = useState(champions)
  const [selectedBuild, setSelectedBuild] = useState(null)
  const [isUpdating, setIsUpdating] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [showRoleDropdown, setShowRoleDropdown] = useState(false)

  const roles = ["All", "Top", "Jungle", "Mid", "Bot", "Support"]

  // Filter champions based on search and role
  useEffect(() => {
    let filtered = [...champions]
    if (selectedRole !== "All") {
      filtered = filtered.filter((c) => c.roles.includes(selectedRole))
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter((c) => c.name.toLowerCase().includes(q))
    }
    setFilteredChampions(filtered)
  }, [selectedRole, searchQuery])

  // Get builds for selected champion
  const getChampionBuilds = (championId) => {
    return championBuilds.filter((build) => build.championId === championId)
  }

  // Get item details by ID
  const getItemById = (itemId) => {
    const allItems = [...items.mythic, ...items.legendary, ...items.boots]
    return allItems.find((item) => item.id === itemId)
  }

  // Get rune details by ID
  const getRuneById = (runeId) => {
    const allRunes = [...runes.keystone, ...runes.secondary]
    return allRunes.find((rune) => rune.id === runeId)
  }

  // Get summoner spell details by ID
  const getSummonerSpellById = (spellId) => {
    return summonerSpells.find((spell) => spell.id === spellId)
  }

  // Handle champion selection
  const handleChampionSelect = (champion) => {
    setSelectedChampion(champion)
    const builds = getChampionBuilds(champion.id)
    if (builds.length > 0) {
      setSelectedBuild(builds[0])
    } else {
      setSelectedBuild(null)
    }
  }

  // Handle build selection
  const handleBuildSelect = (build) => {
    setSelectedBuild(build)
  }

  // Handle update builds
  const handleUpdateBuilds = async () => {
    setIsUpdating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLastUpdated(new Date())
    setIsUpdating(false)
  }

  return (
    <div className="min-h-screen bg-[#0A0E13] text-white">
      {/* Header */}
      <header className="bg-[#0F1923] border-b border-[#1F2731] py-4">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-[#FF4655]" />
            <span className="text-xl font-bold">LoL Builds</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-[#1F2731] border border-[#2F3741] hover:bg-[#2F3741] rounded-md text-white">
              Sign In
            </button>
            <button className="px-4 py-2 bg-[#FF4655] hover:bg-[#FF5E6D] rounded-md text-white">Download App</button>
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Stats Banner */}
        <div className="bg-[#1F2731] rounded-lg p-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Champion Builds - Patch 14.10</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#0F1923] p-4 rounded-md">
              <div className="text-sm text-gray-400">Champions</div>
              <div className="text-2xl font-bold">{champions.length}</div>
            </div>
            <div className="bg-[#0F1923] p-4 rounded-md">
              <div className="text-sm text-gray-400">Builds Available</div>
              <div className="text-2xl font-bold">{championBuilds.length}</div>
            </div>
            <div className="bg-[#0F1923] p-4 rounded-md">
              <div className="text-sm text-gray-400">Last Updated</div>
              <div className="text-lg font-medium">{lastUpdated.toLocaleDateString()}</div>
            </div>
            <div className="bg-[#0F1923] p-4 rounded-md">
              <div className="text-sm text-gray-400">Data Source</div>
              <div className="text-lg font-medium">Riot API</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-[#1F2731] rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <button
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0F1923] border border-[#2F3741] rounded-md hover:bg-[#2F3741]"
                >
                  <Filter className="h-4 w-4" />
                  <span>Role: {selectedRole}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {showRoleDropdown && (
                  <div className="absolute mt-1 w-40 bg-[#0F1923] border border-[#2F3741] rounded-md shadow-lg z-10">
                    {roles.map((role) => (
                      <button
                        key={role}
                        onClick={() => {
                          setSelectedRole(role)
                          setShowRoleDropdown(false)
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2 text-sm hover:bg-[#2F3741]",
                          selectedRole === role && "bg-[#2F3741] font-medium",
                        )}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <div className="relative w-full sm:w-[200px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search champions..."
                  className="w-full pl-10 pr-3 py-2 bg-[#0F1923] border border-[#2F3741] rounded-md focus:outline-none focus:ring-1 focus:ring-[#2F3741]"
                />
              </div>
              <button
                onClick={handleUpdateBuilds}
                disabled={isUpdating}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 bg-[#0F1923] border border-[#2F3741] hover:bg-[#2F3741] rounded-md",
                  isUpdating && "opacity-50 cursor-not-allowed",
                )}
              >
                <RefreshCw size={16} className={isUpdating ? "animate-spin" : ""} />
                Update
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Info size={16} />
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Champion List */}
          <div className="lg:col-span-1">
            <div className="bg-[#1F2731] rounded-lg overflow-hidden">
              <div className="p-4 bg-[#0F1923] border-b border-[#2F3741]">
                <h2 className="text-lg font-bold">Champions</h2>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {filteredChampions.length > 0 ? (
                  filteredChampions.map((champion) => (
                    <div
                      key={champion.id}
                      onClick={() => handleChampionSelect(champion)}
                      className={cn(
                        "flex items-center gap-3 p-4 cursor-pointer border-b border-[#2F3741] hover:bg-[#0F1923] transition-colors",
                        selectedChampion?.id === champion.id && "bg-[#0F1923]",
                      )}
                    >
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-[#0F1923] flex-shrink-0">
                        <img
                          src={champion.splash || "/placeholder.svg"}
                          alt={champion.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{champion.name}</div>
                        <div className="text-xs text-gray-400">{champion.roles.join(", ")}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-400">No champions found matching your filters.</div>
                )}
              </div>
            </div>
          </div>

          {/* Build Details */}
          <div className="lg:col-span-2">
            {selectedChampion ? (
              <div>
                {/* Champion Header */}
                <div className="bg-[#1F2731] rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-[#0F1923] flex-shrink-0">
                      <img
                        src={selectedChampion.splash || "/placeholder.svg"}
                        alt={selectedChampion.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedChampion.name}</h2>
                      <div className="text-gray-400">{selectedChampion.roles.join(", ")}</div>
                    </div>
                  </div>
                </div>

                {/* Build Tabs */}
                <div className="bg-[#1F2731] rounded-lg overflow-hidden mb-6">
                  <div className="flex overflow-x-auto border-b border-[#2F3741]">
                    {getChampionBuilds(selectedChampion.id).map((build, index) => (
                      <button
                        key={index}
                        onClick={() => handleBuildSelect(build)}
                        className={cn(
                          "px-6 py-3 whitespace-nowrap",
                          selectedBuild?.title === build.title
                            ? "bg-[#0F1923] font-medium"
                            : "hover:bg-[#0F1923] text-gray-400",
                        )}
                      >
                        {build.role} - {build.title}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedBuild ? (
                  <>
                    {/* Build Info */}
                    <div className="bg-[#1F2731] rounded-lg p-6 mb-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-[#0F1923] p-4 rounded-md">
                          <div className="text-sm text-gray-400">Win Rate</div>
                          <div className="text-xl font-bold text-green-400">{selectedBuild.winRate}%</div>
                        </div>
                        <div className="bg-[#0F1923] p-4 rounded-md">
                          <div className="text-sm text-gray-400">Pick Rate</div>
                          <div className="text-xl font-bold text-blue-400">{selectedBuild.pickRate}%</div>
                        </div>
                        <div className="bg-[#0F1923] p-4 rounded-md">
                          <div className="text-sm text-gray-400">Difficulty</div>
                          <div className="text-xl font-bold">{selectedBuild.difficulty}</div>
                        </div>
                        <div className="bg-[#0F1923] p-4 rounded-md">
                          <div className="text-sm text-gray-400">Patch</div>
                          <div className="text-xl font-bold">{selectedBuild.patch}</div>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Sword className="h-5 w-5 text-[#FF4655]" />
                          Items
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Core Items */}
                          <div className="bg-[#0F1923] p-4 rounded-md">
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Core Build</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedBuild.items.core.map((itemId) => {
                                const item = getItemById(itemId)
                                return (
                                  <div key={itemId} className="relative group">
                                    <div className="h-10 w-10 rounded-md overflow-hidden bg-[#1F2731]">
                                      <img
                                        src={item?.image || "/placeholder.svg"}
                                        alt={item?.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#0F1923] p-2 rounded-md shadow-lg z-10 hidden group-hover:block">
                                      <div className="font-medium">{item?.name}</div>
                                      <div className="text-xs text-gray-400">{item?.description}</div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>

                          {/* Situational Items */}
                          <div className="bg-[#0F1923] p-4 rounded-md">
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Situational</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedBuild.items.situational.map((itemId) => {
                                const item = getItemById(itemId)
                                return (
                                  <div key={itemId} className="relative group">
                                    <div className="h-10 w-10 rounded-md overflow-hidden bg-[#1F2731]">
                                      <img
                                        src={item?.image || "/placeholder.svg"}
                                        alt={item?.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#0F1923] p-2 rounded-md shadow-lg z-10 hidden group-hover:block">
                                      <div className="font-medium">{item?.name}</div>
                                      <div className="text-xs text-gray-400">{item?.description}</div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>

                          {/* Boots */}
                          <div className="bg-[#0F1923] p-4 rounded-md">
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Boots</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedBuild.items.boots && (
                                <div className="relative group">
                                  <div className="h-10 w-10 rounded-md overflow-hidden bg-[#1F2731]">
                                    <img
                                      src={getItemById(selectedBuild.items.boots)?.image || "/placeholder.svg"}
                                      alt={getItemById(selectedBuild.items.boots)?.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#0F1923] p-2 rounded-md shadow-lg z-10 hidden group-hover:block">
                                    <div className="font-medium">{getItemById(selectedBuild.items.boots)?.name}</div>
                                    <div className="text-xs text-gray-400">
                                      {getItemById(selectedBuild.items.boots)?.description}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Starter Items */}
                          <div className="bg-[#0F1923] p-4 rounded-md">
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Starter Items</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedBuild.items.starter &&
                                selectedBuild.items.starter.map((itemId) => {
                                  const item = getItemById(itemId)
                                  return (
                                    <div key={itemId} className="relative group">
                                      <div className="h-10 w-10 rounded-md overflow-hidden bg-[#1F2731]">
                                        <img
                                          src={item?.image || "/placeholder.svg"}
                                          alt={item?.name}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#0F1923] p-2 rounded-md shadow-lg z-10 hidden group-hover:block">
                                        <div className="font-medium">{item?.name}</div>
                                        <div className="text-xs text-gray-400">{item?.description}</div>
                                      </div>
                                    </div>
                                  )
                                })}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Runes and Summoner Spells */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Runes */}
                        <div>
                          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-[#FF4655]" />
                            Runes
                          </h3>
                          <div className="bg-[#0F1923] p-4 rounded-md">
                            <div className="flex gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-gray-400 mb-2">Primary</h4>
                                <div className="relative group">
                                  <div className="h-12 w-12 rounded-md overflow-hidden bg-[#1F2731]">
                                    <img
                                      src={getRuneById(selectedBuild.runes.primary)?.image || "/placeholder.svg"}
                                      alt={getRuneById(selectedBuild.runes.primary)?.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#0F1923] p-2 rounded-md shadow-lg z-10 hidden group-hover:block">
                                    <div className="font-medium">{getRuneById(selectedBuild.runes.primary)?.name}</div>
                                    <div className="text-xs text-gray-400">
                                      {getRuneById(selectedBuild.runes.primary)?.description}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-400 mb-2">Secondary</h4>
                                <div className="relative group">
                                  <div className="h-12 w-12 rounded-md overflow-hidden bg-[#1F2731]">
                                    <img
                                      src={getRuneById(selectedBuild.runes.secondary)?.image || "/placeholder.svg"}
                                      alt={getRuneById(selectedBuild.runes.secondary)?.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#0F1923] p-2 rounded-md shadow-lg z-10 hidden group-hover:block">
                                    <div className="font-medium">
                                      {getRuneById(selectedBuild.runes.secondary)?.name}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                      {getRuneById(selectedBuild.runes.secondary)?.description}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Summoner Spells */}
                        <div>
                          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-[#FF4655]" />
                            Summoner Spells
                          </h3>
                          <div className="bg-[#0F1923] p-4 rounded-md">
                            <div className="flex gap-4">
                              {selectedBuild.summonerSpells.map((spellId) => {
                                const spell = getSummonerSpellById(spellId)
                                return (
                                  <div key={spellId} className="relative group">
                                    <div className="h-12 w-12 rounded-md overflow-hidden bg-[#1F2731]">
                                      <img
                                        src={spell?.image || "/placeholder.svg"}
                                        alt={spell?.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#0F1923] p-2 rounded-md shadow-lg z-10 hidden group-hover:block">
                                      <div className="font-medium">{spell?.name}</div>
                                      <div className="text-xs text-gray-400">{spell?.description}</div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Skill Order */}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Star className="h-5 w-5 text-[#FF4655]" />
                          Skill Order
                        </h3>
                        <div className="bg-[#0F1923] p-4 rounded-md">
                          <div className="flex gap-4">
                            {selectedBuild.skillOrder.map((skill, index) => (
                              <div key={index} className="flex flex-col items-center">
                                <div className="h-10 w-10 rounded-md bg-[#1F2731] flex items-center justify-center font-bold text-lg">
                                  {skill}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">{index + 1}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Playstyle */}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-[#FF4655]" />
                          Playstyle
                        </h3>
                        <div className="bg-[#0F1923] p-4 rounded-md">
                          <p>{selectedBuild.playstyle}</p>
                        </div>
                      </div>

                      {/* Counters */}
                      <div>
                        <h3 className="text-lg font-bold mb-3">Matchups</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-[#0F1923] p-4 rounded-md">
                            <h4 className="text-sm font-medium text-green-400 mb-2">Strong Against</h4>
                            <ul className="list-disc list-inside">
                              {selectedBuild.counters.strong.map((champion, index) => (
                                <li key={index}>{champion}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-[#0F1923] p-4 rounded-md">
                            <h4 className="text-sm font-medium text-red-400 mb-2">Weak Against</h4>
                            <ul className="list-disc list-inside">
                              {selectedBuild.counters.weak.map((champion, index) => (
                                <li key={index}>{champion}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-[#1F2731] rounded-lg p-6 text-center">
                    <p className="text-gray-400">No builds available for this champion.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-[#1F2731] rounded-lg p-6 text-center">
                <p className="text-gray-400">Select a champion to view builds.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
