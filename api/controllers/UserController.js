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
        console.log(keyword);
        let terms = [];

        terms = await Terms.find();
        res.render('terms' , {terms});
    }

};
