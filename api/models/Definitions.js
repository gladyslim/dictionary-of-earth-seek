module.exports = {
    connection: 'mysql',
    tableName: 'definitions',
    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        term_id: {
            type: 'integer'
        },
        definition: {
            type: 'text',
        },
        source_id: {
            type: 'integer'
        },
        category_id: {
            type: 'integer'
        },
        language_id: {
            type: 'integer'
        },
        user_name: {
            type: 'string'
        },
        user_role: {
            type: 'string'
        },
        upvote_count: {
            type: 'integer',
            defaultsTo: 0
        },
        preferred: {
            type: 'boolean',
            defaultsTo: 0
        },
        is_active: {
            type: 'boolean',
            defaultsTo: true
        }
    },

};