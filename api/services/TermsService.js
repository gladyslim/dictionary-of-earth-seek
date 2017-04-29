const _ = require('lodash')

const strip = require('striptags');

module.exports = {
    createNewTerm: async function (termInfo) {
        return await Terms.create({
            key : termInfo.key,
            description: termInfo.description,
            image: termInfo.image,
            source: termInfo.source,
            user_name: termInfo.user_name,
            user_role: termInfo.user_role,
        });
    },

    upvoteTerm: async function (termId) {
        try {
            const term = await Terms.findOne({ id: termId });
            term.upvote_count++;
            return await term.save();
        } catch (error) {
            return error;
        }
    },

    findTermInfo: function(text) {
        let terms = Terms.find().sort(function(a, b){
            // ASC  -> a.length - b.length
            // DESC -> b.length - a.length
            return strip(b.key).length - strip(a.key).length;
        });

        for (let term of Object.entries(terms)) {
            let key = strip(term.key);
            let match = text.match(new RegExp(key , 'i'));
            if (match && ~match.index) {
                console.log("> " , key , "Index" , match ? match.index : 0);
            }
        }
    }
};