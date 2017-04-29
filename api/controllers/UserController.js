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
        let totalTerms = await Terms.count();
        terms = await Terms.find(criteria);
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

        if (term.image && !utils.hasImage(term.image)) {
            await utils.download(term.image , utils.getUploadPath(term.image));
        }
        res.view('single-entry', {
            term: term,
            layout: 'layout',
            image: utils.getUploadPathUri(term.image)
        });
    }

};
