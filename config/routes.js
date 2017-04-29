module.exports.routes = {
  'post /term': 'TermsController.findTermInfo',
  'put /term/:id?': 'TermsController.updateTermInfo',
  'post /term/new': 'TermsController.createTermInfo',
  'get /term/upvote/:id' : 'TermsController.upvote',
  'get /entry/new' : 'UserController.newterm',
  'get /entries' : 'UserController.list'
};
