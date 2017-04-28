module.exports = {
  attributes: {
    name:{
      type:'string', 
    },
    description:{
      type:'string', 
    },
    source:{
      type:'string', 
    },
    image:{
      type:'string', 
    },
    upvotecount: {
        type: 'integer',
        defaultsTo: 0
    }
  },

};
