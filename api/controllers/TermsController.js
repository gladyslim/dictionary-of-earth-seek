/**
 * TermsController
 *
 * @description :: Server-side logic for managing upvotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    // a CREATE action
    createTermInfo: function(req, res, next) {

        var params = req.params.all();

        Data.create(params, function(err, Data) {

            if (err) return next(err);

            res.status(201);

            res.json(Data);

        });

    },

    // a FIND action
    findTermInfo: function(req, res, next) {

        var id = req.param('id');

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {

            Data.findOne(id, function(err, Data) {

                if (Data === undefined) return res.notFound();

                if (err) return next(err);

                res.json(Data);

            });

        } else {

            var where = req.param('where');

            if (_.isString(where)) {
                where = JSON.parse(where);
            }

            var options = {
                limit: req.param('limit') || undefined,
                skip: req.param('skip') || undefined,
                sort: req.param('sort') || undefined,
                where: where || undefined
            };

            Data.find(options, function(err, Data) {

                if (Data === undefined) return res.notFound();

                if (err) return next(err);

                res.json(Data);

            });

        }

        function isShortcut(id) {
            if (id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
                return true;
            }
        }

    },

    // an UPDATE action
    updateTermInfo: function(req, res, next) {

        var criteria = {};

        criteria = _.merge({}, req.params.all(), req.body);

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id provided.');
        }

        Data.update(id, criteria, function(err, Data) {

            if (Data.length === 0) return res.notFound();

            if (err) return next(err);

            res.json(Data);

        });

    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to DataController)
     */
    _config: {}


};
