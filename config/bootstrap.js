require('colors')
const strips = require('striptags');

/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = async function (cb) {

    console.log('----_>>>');

    async function ImportInitialData() {
        let geology = require('../geology');

        for (let term of geology) {
            await Terms.create({
                key: strips(term.key),
                description: term.detail,
                image: term.imgLink,
                source: term.source,
                category: term.category

            });
            console.log('-> '.bgGreen, term.key);
        }

        const length = (await Terms.find({})).length;
        console.log('Length: '.bgRed, length);
        return geology;
    }

    const count = await Terms.count();

    console.log(count);
    if (count == 0) {
        await ImportInitialData();
    }

    cb();
};
