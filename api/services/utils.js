const _ = require('lodash')
var fs = require('fs'),
request = require('request');
const path = require('path');

const strip = require('striptags');

module.exports = {

    /**
     * Gets an object and fills missing elements to represent
     * a normal object
     */
    normalizeTerm: function (termInfo) {
        let def = {
            key : '',
            description: '',
            image: '',
            source: '',
            user_name: '',
            user_role: '',
        };

        Object.keys(termInfo).map(key => {
            if (termInfo[key] == void 0) {
                delete termInfo[key];
            }
        })

        return _.merge(def, termInfo);

    },

    hasImage: function (image) {
        const fs = require('fs');
        return fs.existsSync(utils.getUploadPath(image)) ? true : false;
    },

    getUploadPath: function (image) {
        return process.approot + "/uploads/" + new Buffer(image).toString('base64') + path.extname(image)
    },
    getUploadPathUri: function (image) {
        return "/uploads/" + new Buffer(image).toString('base64') + path.extname(image);
    },

    download: function (uri, filename) {
        return new Promise(function (resolve , reject) {
            request.head(uri, function(err, res, body){
                console.log('content-type:', res.headers['content-type']);
                console.log('content-length:', res.headers['content-length']);
                request(uri).pipe(fs.createWriteStream(filename)).on('close', resolve);
            });
        });
    }
};