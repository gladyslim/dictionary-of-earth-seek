const _ = require('lodash')

const strip = require('striptags');

module.exports = {
    getTerm: async function(text, category = null) {
        try {
            let query = { select: ['key', 'description', 'image', 'source']};
            if (category) {
                query.where = { category: category };
            }
            const terms = await Terms.find(query).sort({ key: 'DESC' });
            let matchedTerms = [];
            for (let term of terms) {
                let key = strip(term.key);
                let csKey = new RegExp(" " + key + " ", 'i');
                let match = text.match(csKey);
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