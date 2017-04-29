module.exports = {
    connection: 'mysql',
    tableName: 'terms',
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
        description: {
            type: 'text',
        },
        image: {
            type: 'string',
        },
        source: {
            type: 'string',
        },
        user_name: {
            type: 'string',
        },
        user_role: {
            type: 'string'
        },
        upvote_count: {
            type: 'integer',
            defaultsTo: 0
        }
    },

};
