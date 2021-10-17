const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    name:
     {
         type:String,
         required: true
    },
    pass: 
    {
        type: String
    }

});

module.exports = Url = mongoose.model('url', UrlSchema);
