const _ = require('lodash')

const strip = require('striptags');

module.exports = {
    createNewTerm: async function (termInfo) {
        return await Terms.create({
            key : termInfo.name,
            detail: termInfo.description,
            imgLink: termInfo.image,
            source: termInfo.source,
            userName: termInfo.username,
            userRole: termInfo.userrole,
        });
    },

    upvoteTerm: async function (termId, termInfo) {
        try {
            const term = await
            Terms.findOne({ id: termId });
            term.upvoteCount++;
            return await term.save();
        } catch (error) {
            return error;
        }
    },

    findTermInfo: function(text) {
        let terms = require('./geology');
        terms = terms.sort(function(a, b){
            // ASC  -> a.length - b.length
            // DESC -> b.length - a.length
            return strip(b.key).length - strip(a.key).length;
        });

        for (let term of terms) {
            let key = strip(term.key);
            let match = text.match(new RegExp(key , 'i'));
            if (match && ~match.index) {
                console.log("> " , key , "Index" , match ? match.index : 0);
            }
        }
    }
};