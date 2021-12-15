const model = require('@models');


module.exports = {
addPersonalInfo: async (dataObject, transaction = null) => {
    return await model.personal_info.create(dataObject, {transaction: transaction})
    },
}