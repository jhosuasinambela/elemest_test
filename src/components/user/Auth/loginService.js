'use script';

const model = require('@models');
const errorHandler = require('@utils/errorHandler');
const jwt = require('jsonwebtoken')
const globalVariable = require('@utils/globalVariable')
const commonMethod = require('@utils/commonMethod')
const moment = require('moment-timezone')



module.exports = {
login: async (dataObject, callback) => {
    try {
        let {
            mobile_phone_num, 
            password, 
            fcm_id = null, 
        } = dataObject
        let user = null

            user = await module.exports.loginUsername(mobile_phone_num) 

            if(!user) return callback(errorHandler(null, 'Username tidak ditemukan'))
            if(!user.comparePassword(password)) return callback(errorHandler(null, 'Password salah'))
        

        const token = jwt.sign({id: user.id, personal_info_id: user.personal_info_id}, globalVariable.JWTSecret)
        const expired_token = commonMethod.expiredTimeLogin()

        await model.login.update({
            token, expired_token, last_login_time: moment(), fcm_id
        }, {
            where: {id: user.id}
        })

        user = commonMethod.toJSON(user)
        user.token = 'JWT ' + token
        user.expired_token = moment(expired_token).tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss')
        user.is_set_password = user.is_set_password || 0

        delete user.password

        return callback(null, user)
    } catch (error) {
        return callback(errorHandler(error))
        }
    },
}