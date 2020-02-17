const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

userSchema.methods.cryptPass = async pass => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(pass, salt);
}

userSchema.methods.matchPass = async function (pass) {
    return await bcrypt.compare(pass, this.password);
}

module.exports = model('user', userSchema);