const _ = require('lodash')

const strip = require('striptags');

module.exports = {
    createNewTerm: async function (termInfo) {
        try {
            return await Terms.create({
                key: termInfo.key,
                description: termInfo.description,
                image: termInfo.image,
                source: termInfo.source,
                user_name: termInfo.user_name,
                user_role: termInfo.user_role,
            });
        } catch (err) {
            return err;
        }
    },

    upvoteTerm: async function (termId) {
        try {
            const term = await Terms.findOne({ id: termId });
            term.upvote_count++;
            return await term.save();
        } catch (err) {
            return err;
        }
    },

    findTermInfo: async function(text) {
        try {
            const terms = await Terms.find().sort({ key: 'DESC' });
            let matchedKeys = [];
            for (let term of terms) {
                let key = strip(term.key);
                let match = text.match(new RegExp(key, 'i'));
                if (match && ~match.index) {
                    matchedKeys.push(term);
                }
            }

            return matchedKeys;
        } catch (err) {
            return err;
        }
    }
};