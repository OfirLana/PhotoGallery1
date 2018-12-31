// define the custom settings for each transport (file, console)
var options = {
    debug: {
        level: 'debug',
        name: 'debug',
        filename: `${appRoot}/../logs/log.log`,
        handleExceptions: true,
        json: false,
        maxsize: 5242880, // 5MB
        maxFiles: 100,
        colorize: true
    },
    error: {
        level: 'error',
        name: 'error',
        filename: `${appRoot}/../logs/error.log`,
        handleExceptions: true,
        json: false,
        maxsize: 5242880, // 5MB
        maxFiles: 100,
        colorize: true
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    }
};