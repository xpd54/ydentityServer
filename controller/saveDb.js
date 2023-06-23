const ServiceModel = require('../schema/service.model')
const save = async function (data) {
  const { title, email, auth, logo } = data
  const newEntry = new ServiceModel({ title, email, auth, logo })
  await newEntry.save()
}

const getAllServices = async function () {
  const services = await ServiceModel.find()
  return services
}

module.exports = { save, getAllServices }
