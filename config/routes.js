module.exports.routes = {
    'get /terms': {
        controller: 'TermsController',
        action: 'findTermInfo',
        cors: {
            origin: '*',
            headers: 'Content-Type'
        }
    },
    
    'post /terms/new': 'TermsController.createNewTerm',
    'put /terms/upvote/:id': 'TermsController.upvoteTerm',
    'get /entry/new': 'UserController.newterm',
    'get /entries': 'UserController.list',
    'get /entryinfo/:id/:text?': 'UserController.entryinfo',
    'post /entry/new' : 'TermsController.createNewTerm',
    '/' : 'UserController.index',
    '/uploads/*' : {
        static : './uploads/*'
    }
};
