var source;

function setSource(sourceIP) {
    source = sourceIP;
}

function log(logMessage) {
    logDebug(logMessage)
}

function logDebug(logMessage) {
    var payload = {
        message: logMessage,
        type: 'debug'
        client: source;
    };
    sendLogRequest(payload);
}

function logInfo(logMessage) {
    var payload = {
        message: logMessage,
        type: 'info',
        client: source
    };
    sendLogRequest(payload);
}

function logWarn(logMessage) {
    var payload = {
        message: logMessage,
        type: 'warn',
        client: source
    };
    sendLogRequest(payload);
}

function logError(logMessage) {
    var payload = {
        message: logMessage,
        type: 'error',
        client: source
    };
    sendLogRequest(payload);
}

function logFatal(logMessage) {
    var payload = {
        message: logMessage,
        type: 'fatal',
        client: source
    };
    sendLogRequest(payload);
}

function sendLogRequest(logObj) {
    $.post('/logs', logObj);
}
//debug|info|warn|error|fatal