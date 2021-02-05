/*

    Cordova Text-to-Speech Plugin
    https://github.com/vilic/cordova-plugin-tts

    by VILIC VANE
    https://github.com/vilic

    MIT License

*/

exports.speak = function (text) {
    return new Promise(function (resolve, reject) {
        var options = {};

        if (typeof text == 'string') {
            options.text = text;
        } else {
            options = text;
        }

        cordova.exec(resolve, reject, 'TTS', 'speak', [options]);
    });
};

/*exports.setVoice = function(voiceOptions) {
    return new Promise(function (resolve, reject) {
        var options = {};

        if (typeof voiceOptions == 'string') {
            options.voiceName = voiceOptions;
        } else {
            options = voiceOptions;
        }

        cordova.exec(resolve, reject, 'TTS', 'setVoice', [options]);
    });
};*/

exports.stop = function() {
    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'TTS', 'stop', []);
    });
};


exports.checkLanguage = function() {
    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'TTS', 'checkLanguage', []);
    });
};

exports.getVoices = function(options) {
    return new Promise(function (resolve, reject) {     

        cordova.exec(resolve, reject, 'TTS', 'getVoices', [options]);
    });
};

exports.openInstallTts = function() {
    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'TTS', 'openInstallTts', []);
    });
};
