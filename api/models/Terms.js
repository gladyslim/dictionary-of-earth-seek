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
        }
    },

};
