const fs = require('fs');

const { logError } = require('./utils.js');

const USERS_FILE = './data/users.json';
const LOG_FILE = './error/log.json';

// Cargar usuarios desde el archivo
function loadUsers() {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
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

module.exports = {
    listUsers,
};