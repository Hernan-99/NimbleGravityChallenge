# Nimble Gravity Challenge

Challenge desarrollado con React, TypeScript y Vite para Nimble Gravity.

## Tecnologías utilizadas

- React 18
- TypeScript
- Vite
- Axios
- TailwindCSS
- Custom Hooks
- Interceptors para manejo global de errores

## Objetivo

Crear una app limpia, mantenible y escalable que:

- Obtenga mi perfil por email
- Liste los empleos disponibles
- Permita aplicar a la posicion deseada enviando el repo del challenge
- Maneje estados de loading y error
- Centralice la configuracion de API y manejo de errores

## Arquitectura

Aplique los siguientes principios

Separacion por capas:

- services para hacer las llamadas HTTP
- hooks para la logica
- components para mejorar la UI
- Uso de interceptors de Axios para manejo global de errores
- Componentes reutilizables
- Maquetacion responsive con TailwindCSS
- Componentizacion desacoplada

## Funcionalidades

- Fetch de candidato por email (variable de entorno)
- Listado de empleos
- Postular a empleo
- Manejo de loading y errores
- Mensajes visual de casos de exito o error
- Diseño responsive con Tailwind

## Configuración

1. Clonar el repositorio
2. Instalar dependencias

```bash
npm install
```

3. Crear archivo .env en la raiz del proyecto

```bash
VITE_API_URL=<https://www.BASE_URL......>
VITE_EMAIL=<EMAIL> // esto es opcional, porque lo puse harcodeado con mi email
```

4. Ejecutar el proyecto

```bash
npm run dev
```
