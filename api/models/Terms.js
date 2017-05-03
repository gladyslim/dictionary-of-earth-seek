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
        is_active: {
            type: 'boolean',
            defaultsTo: true
        }
    },

};
