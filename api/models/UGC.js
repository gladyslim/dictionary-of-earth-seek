module.exports = {
    connection: 'mysql',
    tableName: 'ugc',
    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        user_name: {
            type: 'string',
        },
        user_role: {
            type: 'string'
        },
        key: {
            type: 'string'
        },
        description: {
            type: 'text'
        },
        image: {
            type: 'string'
        },
        source: {
            type: 'string'
        },
        upvote_count: {
            type: 'integer',
            defaultsTo: 0,
        },
    },
};
