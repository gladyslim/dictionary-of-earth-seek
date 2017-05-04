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

    let categories = require('../data/categories');

    for (let category of categories) {
        await RefCategories.create({
            key: category.key,
            description: category.description
        });
    }

    let sources = require('../data/sources');

    for (let source of sources) {
        await RefSources.create({
            key: source.key,
            description: source.description
        });
    }

    let languages = require('../data/languages');

    for (let language of languages) {
        await RefLanguages.create({
            key: language.key,
            description: language.description
        });
    }

    async function ImportInitialData() {
        try {
            let geologies = require('../data/geology');

            for (let geology of geologies) {
                let source = null;
                let language = null;
                let category = null;
                let term = null;

                term = await Terms.findOrCreate({ key: strips(geology.key) }, { key: strips(geology.key) });
                source = await RefSources.findOne({ description: geology.source });
                language = await RefLanguages.findOne({ key: geology.language });
                category = await RefCategories.findOne({ key: geology.category });

                if (geology.imgLink) {
                    await Images.create({
                        term: term.id,
                        url: geology.imgLink,
                        source_id: source.id
                    });
                }

                await Definitions.create({
                    term: term.id,
                    definition: geology.detail,
                    source_id: source.id,
                    category_id: category.id,
                    language_id: language.id,
                    preferred: true
                });

                console.log('-> '.bgGreen, term.key);
            }

            const length = (await Terms.find({})).length;
            console.log('Length: '.bgRed, length);
            return geologies;
        } catch (error) {
            console.log(error);
        }
    }

    const count = await Terms.count();

    console.log(count);
    if (count == 0) {
        await ImportInitialData();
    }

    cb();
};
