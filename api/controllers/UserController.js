/**
 * TermsController
 *
 * @description :: Server-side logic for managing upvotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    'index' : function (req, res) {
        res.view('index' , {
            layout: 'layout'
        })
    },
    /**
     * Display the form of new term
     */
    'newterm' : function (req, res) {
        res.view('newentry', {
            layout: 'layout'
        });

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
        let totalTerms = await UGC.count();
        terms = await UGC.find(criteria);
        res.view('terms' , {
            terms,
            layout: 'layout',
            total: totalTerms,
            normalizeTerm: utils.normalizeTerm
        });
    },
    'entryinfo': async function (req,res) {
        let id = req.params.all().id;
        const term = await UGC.findOne({id});
        res.view('single-entry', {
            term: term,
            layout: 'layout'
        });
    }

};
