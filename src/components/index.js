'use strict';

const router = require('express').Router();

const backofficeRouterList = {
    'backoffice/user': 'backoffice/users/userAPI'
}

// const mobileRouterList = {
//     'mobile/user': 'mobile/user'
// }
//
// const webRouterList = {
//     'web/user': 'web/user'
// }

for (let item in backofficeRouterList) {
    router.use('/' + item, require('../../src/components/' + backofficeRouterList[item]))
}

// for (let item in mobileRouterList) {
//     router.use('/' + item, require('../../src/api/routes/' + mobileRouterList[item]))
// }
//
// for (let item in webRouterList) {
//     router.use('/' + item, require('../../src/api/routes/' + webRouterList[item]))
// }

module.exports = router;
