/*
 * Copyright (c) 2020 Kevin Pardosi - Sprout Digital Labs.
 * All rights reserved.
 */

const moment = require('moment');
const crypto = require('crypto');

module.exports = {

    /**
     * Get current time for Asia/Jakarta timezone
     *
     * @return {Promise<string>}
     */
    getLocalTime: async () => {
        return moment()
            .tz("Asia/Jakarta")
            .format();
    },

    /**
     * Generate random string
     *
     * @param size
     * @return {string}
     */
    getRandom: (size) => {
        return crypto.randomBytes(size).toString('hex');
    },
}
