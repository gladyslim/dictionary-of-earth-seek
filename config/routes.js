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
    'get /entry/new': 'UserController.newterm',
    'post /terms': 'TermsController.getTerm',
    'get /ugc/:key': 'UgcController.getUGC',
    'put /ugc/upvote/:id': 'UgcController.upvoteUGC',
    'get /entries/:key': 'UserController.newterm',
    'get /entries': 'UserController.list',
    'get /entryinfo/:id/:text?': 'UserController.entryinfo',
    'post /entry/new' : 'UgcController.createNewUGC',
    '/' : 'UserController.index'
};