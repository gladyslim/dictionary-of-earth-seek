const _ = require('lodash')

const strip = require('striptags');

module.exports = {
    getTerm: async function(text) {
        try {
            const terms = await Terms.find({ select: ['key', 'description', 'image', 'source']}).sort({ key: 'DESC' });
            let matchedTerms = [];
            for (let term of terms) {
                let key = strip(term.key);
                let match = text.match(key);
                if (match && ~match.index) {
                    matchedTerms.push(term);
                }
            }

            const groupedTerms = _.chain(matchedTerms)
                .groupBy('key')
                .map(function(val, key) {
                    return {
                        term: key,
                        info: val
                    };
                })
                .value();

            return groupedTerms;
        } catch (err) {
            return err;
        }
    }
};