const fs = require('fs');
const LOG_FILE = './error/log.json';

function logError(error) {
    const errorLog = {
        message: error.message,
        timestamp: new Date().toISOString()
    };
    const logData = JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'));
    logData.push(errorLog);
    fs.writeFileSync(LOG_FILE, JSON.stringify(logData, null, 2));
    console.error('Error:', error.message);
}

module.exports = { logError };
