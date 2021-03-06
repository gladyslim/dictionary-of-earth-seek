module.exports = {
    getTerm: async function (req, res) {
        try {
            const category = req.query.category;
            const terms = await TermsService.getTerm(req.body.body, category);
            let results = [];
            for (let terminfo of terms) {
                terminfo.ugc = await UgcService.getUGC(terminfo.term);
                results.push(terminfo);
            }

            res.json(results);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    },

    _config: {}
};
