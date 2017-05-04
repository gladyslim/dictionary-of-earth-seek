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
        source_id: {
            type: 'integer'
        },
        term: {
            model: 'terms'
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
