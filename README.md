
---

## ⚙️ Configuración del Servidor

El backend está desarrollado en **Node.js con Express** y se ha configurado con las siguientes características:

- `express-handlebars` como motor de plantillas.
- `express-session` para manejo de sesiones.
- `dotenv` para gestionar configuraciones sensibles.
- `method-override` para soportar PUT y DELETE en formularios.
- `Sequelize` como ORM para gestionar la base de datos.
- Middlewares para lectura de datos `urlencoded` y `json`.

Archivo base de servidor (`app.js`) ya configurado para escuchar en el puerto definido en `.env`.

---

## 🧩 Funcionalidades Implementadas

- ✅ Configuración base de servidor y middlewares
- ✅ Estructura de carpetas modular por roles
- ✅ Vista de login estilizada con **Tailwind CSS**
- ✅ Fondo con imagen y superposición oscura
- ✅ Tipografía global **Poppins**
- ✅ Inputs personalizados con íconos
- ✅ Validación básica en el frontend (JS)
- ✅ Mensajes de error dinámicos con Handlebars
- ✅ Enlaces de recuperación:
  - ¿Olvidaste tu contraseña?
  - ¿Olvidaste tu correo electrónico?
- ✅ Botones diferenciados para registro de Cliente/Delivery y Comercio
- ✅ Diseño responsive, accesible y moderno

---

## ✨ Estilo de Login

Se usó **Tailwind CSS** directamente en el HTML. Algunos aspectos destacados del diseño:

- `background-image` con `::before` como capa oscura.
- Diseño centrado con tarjeta (`card`) redondeada y sombra.
- Inputs personalizados con íconos (`Font Awesome`).
- Colores adaptados a un esquema moderno con rojo (#C1121F) como color primario.
- Tipografía Poppins aplicada al `body`.
- Elementos espaciados y con jerarquía visual clara.
- Mensajes de error claramente visibles y estéticos.

---

## 🚧 Próximos pasos sugeridos

- Desarrollar el **frontend del registro** para cliente/delivery y comercio
- Desarrollar el **backend del registro**, validaciones y guardado en BD
- Conectar login con autenticación real (hash de contraseña, sesiones)
- Implementar funcionalidad de recuperación de correo y contraseña
- Crear paneles/dashboard según el tipo de usuario

---

## 🧠 Tecnologías utilizadas

- **Node.js**
- **Express**
- **Express-Session**
- **Handlebars**
- **Tailwind CSS**
- **Font Awesome**
- **Sequelize**
- **SQLite / MySQL (según configuración futura)**
- **JavaScript (vanilla para validaciones)**

---

## 📝 Autor

Desarrollado por: [Emil Echavarria, Luis Alfredo]  
Proyecto académico - ITLA  
Versión inicial: Julio 2025

---





mysql://root:QaXhDfQUiXQMiwphXObgXsHobuTQMMTt@mainline.proxy.rlwy.net:47048/railway