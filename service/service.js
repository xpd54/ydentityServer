const {save, getAllServices} = require("../controller/saveDb")

const addService = async function(title, email, auth, logo) {
    await save({title, email, auth, logo})
}

const getServices = async function(id) {
    const serviceList = await getAllServices(id)
    return serviceList
}

module.exports = {addService, getServices}
