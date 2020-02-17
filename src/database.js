const mongoose = require('mongoose');

const {WEB_APP_NOTES_MONGODB_HOST,WEB_APP_NOTES_MONGODB_DATABASE} = process.env;
const MONGODB_CONNECTION = `mongodb://${WEB_APP_NOTES_MONGODB_HOST}/${WEB_APP_NOTES_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex: true
})
    .then(db => console.log('DB Connection: true'))
    .catch(err => console.log(err))