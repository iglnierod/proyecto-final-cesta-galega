# CestaGalega

## Descripción

CestaGalega es una aplicación web que actúa como un mercado digital pensado para Galicia. Su objetivo es conectar a pequeños comercios y emprendedores locales con personas que buscan productos de la zona, ofreciendo una plataforma sencilla donde las tiendas puedan mostrar y vender sus artículos sin necesidad de tener su propia página web.

El proyecto pretende fomentar el comercio local y crear una alternativa accesible y cercana frente a las grandes plataformas de venta online, facilitando tanto la visibilidad de los negocios gallegos como la compra de productos por parte de los usuarios.

## Instalación / Puesta en marcha

**Requisitos**:
- Node.js 20.9 o superior
- npm 9 o superior
- Docker

**Pasos:**
1. Clonar el repositorio y acceder al directorio `cesta-galega/`
2. Instalar las dependencias con `npm install`
3. Renombrar el fichero `.env.example` a `.env` y si es necesario cambiar las propiedades establecidas por defecto
4. Levantar el contenedor Docker con el comando `docker compose up -d`
5. Crear la base de datos con el comando `npx prisma migrate deploy` 
6. Regenerar el cliente prisma `npx prisma generate`
7. Levantar la página web con el comando `npm run dev`
8. Abrir en el navegador la dirección `localhost:3000`

## Uso

> _TODO_: Es este apartado describe brevemente cómo se usará este software. Plantea un uso básico (como un _quickstart_) Si tiene una interfaz de terminal, puedes describir aquí su sintaxis. Si tiene una interfaz gráfica de usuario, describe aquí **sólo el uso** (a modo de sumario) **de los aspectos más relevantes de su funcionamiento** (máxima brevedad, como si fuese un anuncio reclamo o comercial).
> Podrías incluso hacer una pequeña demo en _gif_ o un pantallazo de la misma muy descriptivo. Recueda que esto es un reclamo para que la prueben o lean tu documentación más extensa.

## Sobre el autor

> _TODO_: Realiza una breve descripción de quien eres (perfil profesional), tus puntos fuertes, o tecnologías que más dominas... y porqué te has decantado por este proyecto. **No más de 200 palabras**. Indica la forma fiable de contactar contigo en el presente y en el futuro.

## Licencia

> _TODO_: Brevísimamente. Indica qué licencia usarás y crea un link a ella. Hay miles de ejemplos en Github.
> _TODO_: Es requisito INDISPENSABLE el licenciar explícitamente el proyecto software. Se recomienda licenciar con _MIT License_ (como viene en la plantilla) o _GNU Free Documentation License Version 1.3_. Presencia de un fichero `LICENSE` en la raiz del repo, con tu fichero de licencia. Recuerda que si empleas una licencia de software libre estás autorizando la derivación de tu obra bajo la misma licencia que elijas, pudiendo dar continuidad, p. e. otro alumno, para continuar tu proyecto en otro curso.
> Si tu proyecto tiene además otro tipo contenido documental, recomendamos los términos de _GNU Free Documentation License Version 1.3_, crea igualmente el fichero `LICENSE`. Será especialmente valorado en este caso, la claridad de la especificación para que el proyecto pueda ser ejecutado partiendo de lo proyectado.
> Ten en cuenta que estás cediendo el uso de este software y sus subproductos generados a la comunidad.

## Documentación

> _TODO_: Emplaza a quien se haya interesado en tu proyecto a leer una guía o documentación extendida del mismo. Haz un link a ella en este punto.

Este proyecto dispone de [una documentación más extensa](doc/doc.md) del proyecto que recomiendo revisar.

### Carpetas
Este apartado explica las diferentes carpetas y estructuras del repositorio

- **.github/**: contiene el workflow de github que hace la migración de la base de datos automáticamente.
- **.vscode/**: contiene ajustes y extensiones recomendadas para Visual Studio Code.
- **cesta-galega/**: contiene el proyecto de _Next.js_ y todo el código de la app.
- **doc/**: agrupa los contenidos de la documentación avanzada del repositorio.
- **.gitattributes**: fichero de Git que impide que se guarden cambios de ficheros binarios y que dan problemas.
- **.gitignore**: fichero de Git que impide que se suban y guarden cambios de ficheros privados o innecesarios.
- **LICENSE**: contenido de la licencia del proyecto.

### Explicación sobre carpetas del proyecto Next.js
Aquí se explican en profundidad las carpetas y ficheros principales del proyecto:

- **app/**: contiene todo el código fuente de la app
  - **(pages)/**: agrupa las distintas páginas navegables de la aplicación.
  - **api/**: contiene las diferentes rutas y ficheros de la API REST de la aplicación.
  - **components/**: agrupa todos los componentes usados en la aplicación.
  - **context/**: crea el contexto de alertas para la aplicación.
  - **generated/**: carpeta generada por Prisma ORM, contiene el cliente utilizado para hacer las llamadas a la base de datos.
  - **lib/**: contiene diferentes utilidades de la app. Como auth.js que maneja la autenticación de usuarios en la app o los diferentes
  tipados de datos de objetos
  - **globals.css**: fichero de CSS global del proyecto, se usa para configurar Tailwind y FlyonUI
  - **layout.tsx**: los ficheros `layout.tsx` en _Next.js_ definen la estructura del endpoint de la carpeta en la que se encuentran,
  en este caso es el layout principal que se usa para renderizar la app.
  - **page.tsx**: los ficheros `page.tsx` en _Next.js_ renderizan el contenido de la página.
- **prisma/**: contiene lo necesario para Prisma ORM.
  - **migrations/**: contiene las migraciones y cambios que sufre la base de datos.
  - **schema.prisma**: fichero que define la estructura de la base de datos SQL.
- **public/**: contiene los recursos estáticos usados en la web.
- **sql/**: contiene scripts sql que insertan datos de prueba en la base de datos.
- **.env.example**: fichero de variables de entorno de ejemplo para poder definirlas fácilmente.
- **.prettierrc**: fichero de configuración de la extensión Prettier, formatea el proyecto.
- **docker-compose.yml**: fichero docker compose que levanta un contenedor con PostgreSQL para desarrollar la app.
- **eslint.config.mjs**: configuración de la dependencia ESLint que muestra fallos de TypeScript.
- **next.config.ts**: fichero de configuración de _Next.js_.
- **package.json**: fichero que define las dependencias del proyecto.
- **postcss.config.mjs**: fichero de configuración de la dependencia PostCSS (necesaria para Tailwind).
- **tailwind.config.ts**: fichero de configuración de la dependencia Tailwind
- **tsconfig.json**: fichero de configuración de TypeScript.

## Guía de contribución

> _TODO_: Tratándose de un proyecto de software libre, es muy importante que expongas cómo se puede contribuir con tu proyecto. Algunos ejemplos de esto son realizar nuevas funcionalidades, corrección y/u optimización del código, realización de tests automatizados, nuevas interfaces de integración, desarrollo de plugins, etc. etc. Sé lo más conciso que puedas.

Los commits de este proyecto seguirán el formato de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), usando los siguientes tipos de commit:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

| Tipo         | Cuándo usarlo                                               | Ejemplo                                       |
|--------------|-------------------------------------------------------------|-----------------------------------------------|
| **feat**     | Nueva funcionalidad                                         | `feat(home): añade sección de noticias`       |
| **fix**      | Corrección de error                                         | `fix(api): corrige URL incorrecta en fetch`   |
| **chore**    | Cambios menores o tareas que no afectan el código funcional | `chore: actualiza .gitignore`                 |
| **docs**     | Cambios en documentación                                    | `docs: actualiza README`                      |
| **style**    | Cambios de formato o estilo (sin cambiar lógica)            | `style: formatea código con Prettier`         |
| **refactor** | Reescritura de código sin cambiar comportamiento            | `refactor: simplifica componente Header`      |
| **test**     | Añadir o modificar tests                                    | `test: añade tests para el componente Footer` |
| **build**    | Cambios en dependencias o build                             | `build: actualiza versión de Next.js`         |
| **ci**       | Cambios en configuración de CI/CD                           | `ci: actualiza workflow de GitHub Actions`    |
