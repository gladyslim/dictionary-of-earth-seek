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
        let categories = require('../data/categories');

        for (let category of categories) {
            try {
                await RefCategories.create({
                    key: category.key,
                    description: category.description
                });
            } catch (error) {
                console.log(')) '.bgRed , error);
            }
        }

        let sources = require('../data/sources');

        for (let source of sources) {
            try {
                await RefSources.create({
                    key: source.key,
                    description: source.description
                });
            } catch (error) {
                console.log(')) '.bgRed , error);
            }
        }

        let languages = require('../data/languages');

        for (let language of languages) {
            try {
                await RefLanguages.create({
                    key: language.key,
                    description: language.description
                });
            } catch (error) {
                console.log(')) '.bgRed , error);
            }
        }

        let geologies = require('../data/geology');

        for (let geology of geologies) {
            try {
                let sourceId = null;
                let languageId = null;
                let categoryId = null;

                let term = await Terms.findOrCreate({key: strips(geology.key)}, { key: strips(geology.key)}).exec(async (err, term) => {
                    return term.id;
                });

                sourceId = await RefSources.find({ description: geology.source }).exec((err, source) => {
                    if (err) return err;

                    return source.id;
                });

                languageId = await RefLanguages.find({ key: geology.language }).exec((err, language) => {
                    if (err) return err;

                    return language.id;
                });

                categoryId = await RefCategories.find({ key: geology.category }).exec((err, category) => {
                    if (err) return err;

                    return category.id;
                });

                if (geology.imgLink) {
                    await Images.create({
                        term_id: term.id,
                        url: geology.imgLink,
                        source_id: sourceId
                    });
                }

                await Definitions.create({
                    term_id: term.id,
                    definition: geology.detail,
                    source_id: sourceId,
                    category_id: categoryId,
                    language_id: languageId
                }).exec((err, data) => {
                    if (err) {
                        return err;
                    }

                    return data.id;
                });

                console.log('-> '.bgGreen, geology.key);
            } catch (error) {
                console.log(')) '.bgRed , geology.key);
            }

            const length = (await Terms.find({})).length;
            console.log('Length: '.bgRed, length);
            return geology;
        }
    }

    const count = await Terms.count();

    console.log(count);
    if (count == 0) {
        await ImportInitialData();
    }

    cb();
};
