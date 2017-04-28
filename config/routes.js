module.exports.routes = {
  'get /term': 'TermsController.findTermInfo',
  'put /term/:id?': 'TermsController.updateTermInfo',
  'post /term': 'TermsController.createTermInfo',
  'get /term/upvote/:id' : 'TermsController.upvote'
};
