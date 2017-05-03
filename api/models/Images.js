module.exports = {
    connection: 'mysql',
    tableName: 'images',
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
        source_id: {
            type: 'integer'
        },
        url: {
            type: 'string',
        },
        path: {
            type: 'string'
        },
        is_active: {
            type: 'boolean',
            defaultsTo: true
        }
    },

};
