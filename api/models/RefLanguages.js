module.exports = {
    connection: 'mysql',
    tableName: 'ref_languages',
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
        }
    },

};