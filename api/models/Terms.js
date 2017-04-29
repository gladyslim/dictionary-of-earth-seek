module.exports = {
    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        key: {
            type: 'string',
        },
        detail: {
            type: 'string',
        },
        imgLink: {
            type: 'string',
        },
        source: {
            type: 'string',
        },
        userName: {},
        userRole: {
            type: 'string'
        },
        upvoteCount: {
            type: 'integer',
            defaultsTo: 0
        }
    },

};
