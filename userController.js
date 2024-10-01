const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const { logError } = require('./utils.js');

const USERS_FILE = './data/users.json';
const LOG_FILE = './error/log.json';

// Cargar usuarios desde el archivo
function loadUsers() {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
}

// Guardar usuarios en el archivo
function saveUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}


// Mostrar todos los usuarios
function listUsers() {
    try {
        const users = loadUsers();
        console.log(users);
    } catch (error) {
        logError(error);
    }
}

// Mostrar usuario por ID
function getUserById(id) {
    try {
        const users = loadUsers();
        const user = users.find(u => u.id === id);
        if (user) {
            console.log(user);
        } else {
            throw new Error('Usuario no encontrado');
        }
    } catch (error) {
        logError(error);
    }
}

// Agregar nuevo usuario
async function addUser(nombre, apellido, email, password) {
    try {
        const users = loadUsers();
        if (users.some(u => u.email === email)) {
            throw new Error('Email ya registrado');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: uuidv4(),
            nombre,
            apellido,
            email,
            password: hashedPassword,
            isLoggedIn: false
        };

        users.push(newUser);
        saveUsers(users);
        console.log('Usuario agregado exitosamente');
    } catch (error) {
        logError(error);
    }
}

module.exports = {
    listUsers,
    getUserById,
    addUser,
};