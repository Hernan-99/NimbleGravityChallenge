# Nimble Gravity Challenge

Challenge desarrollado con React, TypeScript y Vite para Nimble Gravity.

# Explicacion del bug con el que me encontre y como lo solucione

Durante la implementación al hacer el post al endpoint para aplicar, recibía el siguiente error:

```json
{
  "error": "Invalid body",
  "details": {
    "fieldErrors": {
      "applicationId": ["applicationId is required"]
    }
  }
}
```

El mail no mencionaba todos los campos que necesitaban ser enviados 😅 y me guie solo por eso. Yo estaba intentado enviar solamente esto:

```json
{
  "uuid": "...",
  "jobId": "...",
  "candidateId": "...",
  "repoUrl": "..."
}
```

Desde la consola en network me decia el error:

![Error](/images/err.jpg)

tambien habia que agregar el campo

```json
{ "applicationId": "..." }
```

Quedando asi:

```json
{
  "uuid": "...",
  "jobId": "...",
  "applicationId": "...",
  "candidateId": "...",
  "repoUrl": "..."
}
```

## Solución aplicada

Actualice el payload en el service:

```js
export const applyJob = async (payload: {
  uuid: string;
  candidateId: string;
  applicationId: string;
  jobId: string;
  repoUrl: string;
}) => {...};

```

Tambien actualice la llamada de applyJob en el metodo de envio de aplicacion dentro del componente PositionItem>

```js
export const handleSubmit = async () => {
    ...

    await applyJob({
        uuid: candidate.uuid,
        candidateId: candidate.candidateId,
        applicationId: candidate.applicationId,
        jobId: position.id,
        repoUrl,
      });

    ...
}
```

Despues de esto, la app funciono y respondio un status 200
![Success](/images/success.jpg)

---

## Manejo de control de versiones

Use una estructura basica de control de versiones con dos ramas principales:

- main, rama con el codigo finalizado y probado.
- develop, rama de desarrollo donde fui implementando las funcionalidades y mejoras antes de hacer un merge con la rama main.

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
