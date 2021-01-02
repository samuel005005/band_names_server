const { Schema,model, models } = require('mongoose');

const MessageSchema = Schema({
    From:{
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required :true
    },
    To:{
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required :true
    },
    Message:{
        type: String,
        required :true
    }
},{
    timestamps: true
});

MessageSchema.method('toJSON',function(){
    const { __v,_id,...object} = this.toObject();
    return object;
});

module.exports= model('Message',MessageSchema);