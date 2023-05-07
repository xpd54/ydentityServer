const { mongoose } = require("mongoose")
const schema = mongoose.Schema
const service = new schema({
    title: {
        type: Number, 
        default: 0
    },
    email: {
        type: Number,
        default: 0
    },
    logo: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("service", service)
