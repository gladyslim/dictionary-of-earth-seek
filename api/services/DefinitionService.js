module.exports = {
    getDefinitions: async function (term) {
        try {
            const defintions = await Terms.find()
                .populate('images')
                .populate(
                    'definitions',
                    {
                        sort: 'upvote_count DESC'
                    }
                )
                .where({ key: term });
            return defintions;
        } catch (err) {
            return err;
        }
    },
    // Does not work
    uploadImages: async function (req) {

        try {
            req.file('avatar').upload({
                maxBytes: 10000000
            },
                function whenDone(err, uploadedImages) {
                    if (err) {
                        throw err;
                    }
                    if (uploadedImages.length == 0) {
                        throw new Error("Upload something you dipshit");
                    }

                    /*
                    // -->> req.session.me // to get path stored
                    return await Images.create({
                        term_id: termId,
                        path:  req.session.me
                    });  
                    */
                    Images.create({
                        term_id: req.params.all().id,
                        path: req.session.me
                    }).exec(function (err) {
                        if (err) return res.negotiate(err);
                        return res.ok();
                    });
                }

            );

            await Images.create(
                {}
            );
        } catch (err) {
            return err;
        }
    }
    // Alan End
}