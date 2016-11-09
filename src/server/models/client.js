import mongoose from 'mongoose';

var schema = new mongoose.Schema({

    secret: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
},{
  versionKey: false
});

export default mongoose.model('Client', schema);
