const _ = require('lodash')

const strip = require('striptags');

module.exports = {
    createNewTerm: async function (termInfo) {
        return await Terms.create({
            key : termInfo.name,
            description: termInfo.description,
            image: termInfo.image,
            source: termInfo.source,
            user_name: termInfo.username,
            user_role: termInfo.userrole,
        });
    },

    upvoteTerm: async function (termId, termInfo) {
        try {
            const term = await
            Terms.findOne({ id: termId });
            term.upvote_count++;
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