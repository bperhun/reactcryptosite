const Router = require("express");
const tradersPost = require("../models/tradersPost");
const router = new Router();

router.post('/addPostTraders', async (req, res) => {
    try {
        const { header, alt, src, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, paragraph8, paragraph9, paragraph10, paragraph11, paragraph12, paragraph13, paragraph14, paragraph15, paragraph16, paragraph17, paragraph18, paragraph19, paragraph20, paragraph21 } = req.body;

        const checkHeader = await tradersPost.findOne({ header });

        if (checkHeader) {
            return res.status(400).json({ message: `Post with this ${header} alredy exist` });
        }

        const post = new tradersPost({ header, alt, src, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, paragraph8, paragraph9, paragraph10, paragraph11, paragraph12, paragraph13, paragraph14, paragraph15, paragraph16, paragraph17, paragraph18, paragraph19, paragraph20, paragraph21 });
        await post.save();

        return res.json({ message: "Post was created" });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

module.exports = router;