/*
 * Copyright (c) 2020 Kevin Pardosi - Sprout Digital Labs.
 * All rights reserved.
 */

'use script';

const model = require('@models/index');
const sequelize = require('sequelize');
const { Op } = require('sequelize');
const responseUtils = require('@utils/responseUtils');

module.exports = {

    /**
     * Create a user
     *
     * Add new insured, including login account
     *
     * @async
     * @function
     * @desc
     * @param dataObjcet
     * @param callback
     * @returns {Object} data of created user
     */
    createUser: async (dataObjcet, callback) => {
        model.user.create(dataObjcet).then( res => {
            callback(null, responseUtils.wrapResult("Successfully create a new user", res));
            return;
        }).catch( e => {
            callback(e);
        })
    }
}
