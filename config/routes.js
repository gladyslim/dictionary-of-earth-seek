module.exports.routes = {
    'get /terms': 'TermsController.findTermInfo',
    'post /terms/new': 'TermsController.createNewTerm',
    'put /terms/upvote/:id': 'TermsController.upvoteTerm',
    'get /entry/new': 'UserController.newterm',
    'get /entries': 'UserController.list'
};
