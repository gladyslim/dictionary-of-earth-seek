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
    'get /definition/:key': 'DefinitionController.getDefinitions',
    'get /ugc/:key': 'UgcController.getUGC',
    'put /ugc/upvote/:id': 'UgcController.upvoteUGC',
    'get /entries/:key': 'UserController.newterm',
    'get /entries': 'UserController.list',
    'get /entryinfo/:id/:text?': 'UserController.entryinfo',
    'post /entry/new' : 'UgcController.createNewUGC',
    'post /entry/new/img' : 'UgcController.uploadImages',
    '/' : 'UserController.index'
};