const { Schema, model, mongoose } = require("mongoose");


const followerSchema = new Schema({
    startDate:{
        type: Date,
    },
    endDate:{
        type: Date,
    },
    user_id:{
        type: 'string',
    },
    channel_id:{
        type: 'string',
    },
    status:{
        type: 'string',
        default: "deactivate"
    },
    pay:{
        type: Number,
    },
    month:{
        type: Number
    }
});

module.exports = model("Followers", followerSchema);