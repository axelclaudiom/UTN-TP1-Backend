# Sistema de Gestión de Usuarios

Este proyecto es un sistema de gestión de usuarios construido con **Node.js** y utilizando el módulo `fs` para la persistencia de datos en archivos JSON. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en un conjunto de usuarios, con validaciones y registro de errores.

## Funcionalidades

- **Listar Usuarios**: Muestra todos los usuarios almacenados.
- **Obtener Usuario por ID**: Muestra un usuario específico basado en su ID.
- **Agregar Usuario**: Permite agregar un nuevo usuario, validando que el email sea único y hasheando la contraseña.
- **Modificar Usuario**: Actualiza la información de un usuario, incluyendo su contraseña, si es necesario.
- **Eliminar Usuario**: Elimina un usuario basado en su ID.
- **Manejo de Errores**: Los errores se registran en un archivo `log.json` para futura referencia.

## Estructura del Proyecto

```bash
user-management/
│
├── data/
│   └── users.json      # Archivo JSON que almacena los usuarios.
│
├── error/
│   └── log.json        # Archivo JSON que almacena los logs de errores.
│
├── index.js            # Archivo principal para la ejecución de comandos.
├── userController.js   # Controlador con las operaciones CRUD.
├── utils.js            # Funciones auxiliares como el manejo de errores.
└── README.md           # Este archivo.
```


## Requisitos
- **Node.js** (versión 12 o superior).
- **Dependencias**:
    - **uuid**: para la generación de IDs únicos.
    - **bcrypt**: para el hash de las contraseñas.

## Uso de la Aplicación
Desde la terminal, puedes ejecutar los siguientes comandos:

- **Listar usuarios**: node index.js list
- **Obtener un usuario por ID**: node index.js get <id>
- **Agregar un usuario**: node index.js add "Juan" "Perez" "juan@example.com" "password123"
- **Actualizar un usuario**: node index.js update <id> "NuevoNombre" "NuevoApellido" "nuevoemail@example.com" "nuevapassword"
- **Eliminar un usuario**: node index.js delete <id>