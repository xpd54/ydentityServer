const { mongoose } = require('mongoose')
const Schema = mongoose.Schema
const service = new Schema({
  title: {
    type: String
  },
  email: {
    type: String
  },
  auth: {
    type: String
  },
  logo: {
    type: String,
    default: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-1024.png'
  }
})

module.exports = mongoose.model('service', service)
