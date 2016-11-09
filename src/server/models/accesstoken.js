import mongoose from 'mongoose';

var schema = new mongoose.Schema({
    secret: {
      type:String,
      index:true
    },
    client: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Client',
      index:true
    },
    provider: {
      type:String,
      index:true
    },
    user: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      index:true
    }
},{
  versionKey: false
});

export default mongoose.model('AccessToken', schema);

import Client from './client';
import User from './user';
