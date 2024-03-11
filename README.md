
# BASE DE DATOS

- crear base de datos (CREATE DATABASE bdtaxtech)
- usar la base de datos (USE bdtaxtech)
- ejecutar el backUp (backup-2024-03-11.sql)


# BACKEND

- ubicarse en la raiz de la carpeta de backend (appTaxTech/backend)
- instalar composer install
- configurar el dbUser y dbPass en src/App/Database.php, segun la configuracion del local
- ejecutar el backend (php -S localhost:8080 -t public)

# FRONTEND

- ubicarse en la raiz de la carpeta de frontend (appTaxTech/frontend)
- instalar npm install
- crear el archivo .env y copiar los elementos de .env.example
- ejecutar el front end (npm run dev)


# rutas en la aplicacion:
 http://localhost:5173/

- /: Lista de clientes
- /clientes: Lista de clientes
- /registrar: Registrar clientes
- /cliente/#dni: Detalle del Cliente
