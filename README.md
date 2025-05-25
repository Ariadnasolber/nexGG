# nex.gg

Plataforma web interactiva inspirada en Blitz.gg, desarrollada con **Next.js 15**, **React 19** y **Tailwind CSS 4**, que permite consultar información detallada sobre campeones, builds, estadísticas y sinergias del videojuego *League of Legends*.

## 🧠 Objetivo del proyecto

El objetivo principal de **nex.gg** es ofrecer a los jugadores una herramienta visualmente atractiva y funcional para mejorar su experiencia en el juego, proporcionando datos actualizados sobre campeones, habilidades, objetos, roles y builds personalizadas.

## 🚀 Tecnologías utilizadas

- **Next.js 15**
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Framer Motion**
- **Riot Games API (Data Dragon)**
- **Redux Toolkit (para gestión global de estado)**
- **Vercel (despliegue en producción)**

## 🧩 Funcionalidades principales

- 🔍 Página de campeones con búsqueda, filtros y tarjetas animadas.
- 📊 Sección de builds optimizadas y estadísticas por rol.
- 🧠 Sinergias y counters por campeón.
- 📱 Diseño responsive adaptado a móvil, tablet y escritorio.
- 🔐 Autenticación básica (modo local, sin backend).
- 🌑 Interfaz moderna, oscura y accesible.


## 🖼️ Vistas implementadas

- **Home** – Introducción con presentación visual del proyecto.
- **Login** – Pantalla de autenticación.
- **Dashboard** – Vista exclusiva para administradores.
- **Champions** – Página con todos los campeones y sus filtros.
- **ChampProfile** – Detalle completo de cada campeón: estadísticas, habilidades, builds y sinergias.
- **TierListPage** – Clasificación por popularidad y rendimiento.

## 🧪 Tests

El proyecto incluye pruebas automatizadas:

- ✔️ Unitarias: Componentes de formulario y producto.
- 🔁 Integración: Métodos del servicio de productos.
- 🧪 End-to-End: Formulario de productos y login (Cypress).

## 🛠️ Instalación local

```bash
git clone https://github.com/ariadna/nex.gg.git
cd nex.gg
npm install
npm run dev
