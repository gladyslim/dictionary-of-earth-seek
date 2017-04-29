module.exports.routes = {
    'post /terms': 'TermsController.getTerm',
    'get /ugc/:key': 'UgcController.getUGC',
    'put /ugc/upvote/:id': 'UgcController.upvoteUGC',
    'get /entry/new': 'UserController.newterm',
    'get /entries': 'UserController.list',
    'get /entryinfo/:id/:text?': 'UserController.entryinfo',
    'post /entry/new' : 'UgcController.createNewUGC',
    '/' : 'UserController.index'
};