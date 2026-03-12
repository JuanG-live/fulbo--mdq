# ⚽ fulbo--mdq

App web para organizar y registrar los partidos de fútbol del grupo. Pensada para llevar el historial de partidos, ver estadísticas de jugadores y armar equipos balanceados para cada fecha.

🔗 **Demo en vivo:** [fulbo-mdq-juang-lives-projects.vercel.app](https://fulbo-mdq-juang-lives-projects.vercel.app)

---

## ✨ Funcionalidades

### 📋 Partidos
Historial de todos los partidos jugados, con fecha, equipos (con pechera vs sin pechera) y resultado final.

### 🏆 Jugadores
Tabla de posiciones con ranking automático basado en victorias y derrotas. Muestra la valoración acumulada de cada jugador a lo largo de la temporada.

### 🎲 Armador de Equipos
Seleccioná quiénes van a jugar ese día y el sistema arma los equipos automáticamente de forma balanceada según las valoraciones de cada jugador.

---

## 🛠️ Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Componentes UI:** shadcn/ui
- **Package manager:** pnpm
- **Deploy:** Vercel

---

## 🚀 Instalación local

```bash
# Clonar el repo
git clone https://github.com/JuanG-live/fulbo--mdq.git
cd fulbo--mdq

# Instalar dependencias
pnpm install

# Levantar el servidor de desarrollo
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el browser.

---

## 📁 Estructura

```
fulbo--mdq/
├── public/          # Assets estáticos
├── src/             # Código fuente
│   └── app/         # Rutas (App Router de Next.js)
│       ├── page.tsx          # /partidos
│       ├── jugadores/        # /jugadores
│       └── armador/          # /armador
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## 👤 Autor

**Juan María Génova** — [@JuanG-live](https://github.com/JuanG-live)
