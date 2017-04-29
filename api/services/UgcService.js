module.exports = {
    createNewUGC: async function (ugc) {
        try {
            return await UGC.create({
                user_name: ugc.user_name,
                user_role: ugc.user_role,
                key: ugc.key,
                description: ugc.description,
                image: ugc.image,
                source: ugc.source,
            });
        } catch (err) {
            return err;
        }
    },

    upvoteUGC: async function (ugcId) {
        try {
            const ugc = await UGC.findOne({ id: ugcId });
            ugc.upvote_count++;
            return await ugc.save();
        } catch (err) {
            return err;
        }
    },

    getUGC: async function (term) {
        try {
            const ugc = await UGC.find({ select: ['id', 'user_name', 'user_role', 'key', 'description', 'image', 'source', 'upvote_count'], where: { key: term } }).sort({ upvote_count: 'DESC' });

            return ugc;
        } catch (err) {
            return err;
        }
    }
}