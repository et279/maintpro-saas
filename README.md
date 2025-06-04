
# 🛠 MaintPro – Plataforma de Gestión de Reparaciones y Seguro Hogar

**MaintPro** es una solución web diseñada para Gala Inmobiliaria con el objetivo de reemplazar el uso de Excel en la gestión de reparaciones por una plataforma centralizada, automatizada y escalable.  
Desarrollada con **Next.js + PrimeReact + Tailwind CSS**, MaintPro cubre todo el ciclo de vida de una reparación: desde la solicitud pública hasta la facturación y análisis de KPIs, con arquitectura lista para evolucionar como un SaaS.

## 🚀 Características principales

- 📝 Solicitud pública sin login con fotos y prioridad
- 🗂 Gestión de ítems y cotizaciones (workflow tipo Kanban + SLA)
- 📆 Asignación a técnicos vía calendario con notificaciones automáticas
- 💸 Cotización y facturación consolidada en PDF
- 🔔 Comunicación vía email, push y SMS
- 📦 Inventario y stock mínimo (futuro)
- 👷‍♂️ Módulo de RRHH y contratistas (futuro)
- 📊 Dashboard de KPIs y métricas operativas
- ⚙️ Integraciones por API, chatbot, IA de asignación (futuro)

## 🧱 Stack tecnológico

| Capa         | Tecnología                       | Justificación                                  |
|--------------|----------------------------------|------------------------------------------------|
| Frontend     | Next.js + PrimeReact + Tailwind  | UI moderna, potente y responsive               |
| Estado/Query | Zustand + TanStack Query         | Escalabilidad y rendimiento                    |
| Backend API  | NestJS (REST) + Prisma (futuro)  | Modularidad y alto performance                 |
| Base de datos| PostgreSQL (Supabase o RDS)      | Relacional, segura y robusta                   |
| Auth         | Supabase Auth / Clerk            | Magic-link y roles diferenciados               |
| Storage      | Supabase Storage / R2            | Fotos y documentos PDF                         |
| Infra        | Vercel (frontend), Fly.io (API)  | Serverless y despliegue continuo (CI/CD)       |
| Notificaciones | Postmark + OneSignal           | Email, push y SMS                              |

## 📁 Estructura del repositorio

```
maintpro-saas/
├── (full-page)/              # Full-page demo
├── app/                      # Rutas y vistas (Next.js App Router)
├── demo/                     # Demostración de funcionalidades
├── layout/                   # Layouts y componentes globales
├── lib/                      # Servicios (API, Supabase, etc.)
├── public/                   # Recursos públicos
├── styles/                   # Tailwind CSS y estilos globales
├── types/                    # Tipos de datos
├── .editorconfig             # Configuración de editor
├── .env.example              # Variables de entorno ejemplo
├── .env.local                # Variables de entorno
├── .eslintrc.json            # Configuración ESLint
├── .gitignore                # Archivos ignorados por Git
├── .prettierrc               # Configuración   Prettier
├── .prettierignore           # Archivos ignorados por Prettier
├── changelog.md              # Cambios realizados
├── license.md                # Licencia  de
├── README.md                 # Documentación
├── next.config.js            # Configuración de Next.js
├── package.json              # Dependencias y scripts
├── package-lock.json         # Lock de dependencias
```

## ✅ MVP – Funcionalidades obligatorias

- [ ] Solicitud pública anónima con fotos
- [ ] Seguimiento vía enlace único
- [ ] Creación y gestión de ítems y cotizaciones
- [ ] Estado visual (Kanban + semáforo SLA)
- [ ] Asignación con calendario drag-and-drop
- [ ] Notificaciones automáticas (técnico, cliente)
- [ ] Generación de PDFs de cotización y factura final
- [ ] Dashboard básico con KPIs de tiempos y costos

## 🧪 Cómo iniciar el proyecto

```bash
git clone https://github.com/et279/maintpro-saas.git
cd maintpro-saas
npm install
npm run dev
```

## 🔮 Fases futuras (P1–P3)

- Inventario con control de stock
- RRHH y desempeño de técnicos
- App móvil con React Native
- IA para asignación según contexto
- Multi-tenant SaaS con panel comercial

## 📜 Licencia

Proyecto privado propiedad de Gala Inmobiliaria y desarrollado por Nubiko.
