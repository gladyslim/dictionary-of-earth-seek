const _ = require('lodash')

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
        return _.merge(def, termInfo);

    },

};