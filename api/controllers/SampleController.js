let SampleController = {
    /**
     * Each function gets two params called req, res.
     * res.params.all() contains the parameters you pass to the controller.
     * for get requests, you may check the routes to see what parameters are available.
     */
    'hello': (req, res) => __awaiter(this, void 0, void 0, function* () {
        let x = 12 + 11;
        res.json({
            data: x
        });
    }),
    'thomas': function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Wait(1000);
            res.json({
                data: "Hello 22"
            });
        });
    }
};
module.exports = SampleController;
