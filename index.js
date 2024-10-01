const args = process.argv.slice(2);

switch (args[0]) {
    case 'list':
        listUsers();
        break;
    case 'get':
        getUserById(args[1]);
        break;
    case 'add':
        addUser(args[1], args[2], args[3], args[4]); // nombre, apellido, email, password
        break;
    case 'update':
        updateUser(args[1], args[2], args[3], args[4], args[5]); // id, nombre, apellido, email, password
        break;
    case 'delete':
        deleteUser(args[1]); // id
        break;
    default:
        console.log('Comando no reconocido');
}