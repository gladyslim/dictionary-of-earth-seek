/**
 * TermsController
 *
 * @description :: Server-side logic for managing upvotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    /**
     * Display the form of new term
     */
    'newterm' : function (req, res) {
        res.render('newentry');

    },

    /**
     * Display the data to the public
     */
    'list' : async function (req,res) {
        let keyword = req.params.all().q;
        let criteria = {};
        let terms = [];
        if (keyword) {
            criteria = {key: {
                contains: keyword
            }};
        }
        terms = await Terms.find(criteria);
        res.render('terms' , {terms});
    }

};
