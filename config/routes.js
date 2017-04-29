module.exports.routes = {
    'post /terms': {
        controller: 'TermsController',
        action: 'getTerm',
        cors: {
            origin: '*',
            headers: 'Content-Type'
        }
    },

    'get /entry/new': 'UserController.newterm',
    'get /ugc/:key': 'UgcController.getUGC',
    'put /ugc/upvote/:id': 'UgcController.upvoteUGC',
    'get /entries/:key': 'UserController.newterm',
    'get /entries': 'UserController.list',
    'get /entryinfo/:id/:text?': 'UserController.entryinfo',
    'post /entry/new' : 'UgcController.createNewUGC',
    '/' : 'UserController.index'
};