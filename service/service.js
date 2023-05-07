const {save, getAllServices} = require("../controller/saveDb")
const addService = function(title, email, auth, logo) {
    savePersistent({title, email, auth, logo})
    return
}

const savePersistent = async function(data) {
    await save(data)
}

const getServices = async function(id) {
    const serviceList = await getAllServices(id)
    return serviceList
}

module.exports = {addService, getServices}
