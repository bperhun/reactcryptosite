const { Schema, model, } = require("mongoose");


const tradersPost = new Schema({
    header: { type: String, required: true, unique: true },
    alt: { type: String },
    src: { type: String },
    paragraph1: { type: String },
    paragraph2: { type: String },
    paragraph3: { type: String },
    paragraph4: { type: String },
    paragraph5: { type: String },
    paragraph6: { type: String },
    paragraph7: { type: String },
    paragraph8: { type: String },
    paragraph9: { type: String },
    paragraph10: { type: String },
    paragraph11: { type: String },
    paragraph12: { type: String },
    paragraph13: { type: String },
    paragraph14: { type: String },
    paragraph15: { type: String },
    paragraph16: { type: String },
    paragraph17: { type: String },
    paragraph18: { type: String },
    paragraph19: { type: String },
    paragraph20: { type: String },
    paragraph21: { type: String },

});

module.exports = model('tradersPost', tradersPost);