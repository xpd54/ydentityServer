const serviceModel = require("../schema/service.model")
const save = async function(data) {
    const {title, email, auth, logo} = data
    const newEntry = new serviceModel({title, email, auth, logo})
    await newEntry.save()
}

const getAllServices = async function() {
    const services = await serviceModel.find()
    return services
}

module.exports = {save, getAllServices}
