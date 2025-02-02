const {
    model,
    Schema
} = require('mongoose')
const plm = require('passport-local-mongoose')

const UserSchema = new Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['BOSS', 'DEV', 'TA'],
        default: 'DEV'
    }
}, {
    timestamps: true,
    versionKey: false
})

UserSchema.plugin(plm, {
    usernameField: 'username'
})

const User = model('User', UserSchema)

module.exports = User