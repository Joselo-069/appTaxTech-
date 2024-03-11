
# BASE DE DATOS

- crear base de datos (CREATE DATABASE bdtaxtech)
- usar la base de datos (USE bdtaxtech)
- ejecutar el backUp (backup-2024-03-11.sql)


# BACKEND

- instalar composer install
- configurar el dbUser y dbPass en src/App/Database.php
- ejecutar el backend (php -S localhost:8080 -t public)

# FRONTEND

- instalar npm install
- crear el archivo .env y copiar los elementos de .env.example
- ejecutar el front end (npm run dev)


# rutas en la apliacion:
 http://localhost:5173/

- /: Lista de clientes
- /clientes: Lista de clientes
- /registrar: Registrar clientes
- /cliente/#dni: Detalle del Cliente