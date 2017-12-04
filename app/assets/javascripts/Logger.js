function log(logMessage) {
    logDebug(logMessage)
}

function logDebug(logMessage) {
    var payload = {
        message: logMessage,
        type: 'debug'
    };
    sendLogRequest(payload);
}

function logInfo(logMessage) {
    var payload = {
        message: logMessage,
        type: 'info'
    };
    sendLogRequest(payload);
}

function logWarn(logMessage) {
    var payload = {
        message: logMessage,
        type: 'warn'
    };
    sendLogRequest(payload);
}

function logError(logMessage) {
    var payload = {
        message: logMessage,
        type: 'error'
    };
    sendLogRequest(payload);
}

function logFatal(logMessage) {
    var payload = {
        message: logMessage,
        type: 'fatal'
    };
    sendLogRequest(payload);
}

function sendLogRequest(logObj) {
    $.post('/logs', logObj);
}
//debug|info|warn|error|fatal