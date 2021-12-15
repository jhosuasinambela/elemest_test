const route = require('express').Router();
const httpStatus = require('http-status-codes');
const loginServices = require('./loginService');
const registerServices = require('./registerService');
const responseUtils = require('@utils/response');
const middlewares = require('@middlewares/index')
const registerSchema = require('@validations/auth/register')




route.post('/login', async (req, res) => {
    try {
        const dataObject = req.body;
        await loginServices.login(dataObject, (error, result)=>{ return responseUtils(res, error, result)})
    } catch (e) {
        console.log('error===>', e);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(e);
    }
});


route.post('/register', middlewares.validations(registerSchema.REGISTER), async (req, res) => {
    try {
        const dataObject = req.body;
        await registerServices.register(dataObject, (error, result)=>{ return responseUtils(res, error, result)})
    } catch (e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(e);
    }
})