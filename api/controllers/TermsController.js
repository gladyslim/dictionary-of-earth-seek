module.exports = {
    createNewTerm: async function (req, res) {
        const termInfo = req.body.termInfo;
        const result = await TermsService.createNewTerm(termInfo);
        res.json(result);
    },

    upvoteTerm: async function (req, res) {
        let id = req.params.all().id;
        const result = await TermsService.upvoteTerm(id, req.body)
        res.json(result);
    },

    findTermInfo: async function (req, res) {
        const result = await TermsService.findTermInfo(req.body);
        res.json(result);
    },

    _config: {}
};
