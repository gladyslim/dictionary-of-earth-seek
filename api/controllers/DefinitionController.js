module.exports = {
    getDefinitions: async function (req, res){
        try {
            const result = await DefinitionService.getDefinitions(req.params.all().key);
            res.json(result);
        } catch (err) {
            return err;
        }
    },
    
    getUGC: async function (req, res) {
        try {
            const result = await UgcService.getUGC(req.params.all().key);
            res.json(result);
        } catch (err) {
            return err;
        }
    },

    createNewUGC: async function (req, res) {
        try {
            const result = await UgcService.createNewUGC(req.body.body);
            res.json(result);
        } catch (err) {
            res.json(err);
        }
    },

    upvoteUGC: async function (req, res) {
        try {
            const result = await UgcService.upvoteUGC(req.params.all().id)
            res.json(result);
        } catch (err) {
            res.json(err);
        }
    },
    
    uploadImages: async function (req, res) {
        try {
            const result = await UgcService.uploadImages(req);
        } catch (err){
            res.json(err);
        }
    },

    _config: {}
};