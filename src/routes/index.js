/**
 * Author: Zikry Kurniawan
 * Contact: zikrykr@gmail.com
 * 
 * How to use:
 * 
 * - Make sure you put route file inside components folder
 * - For route file, make sure you name the file as this format: <folder_name>API.js
 * - You can edit list of endpoint and folder name that will be used as route.
 * - Endpoint name can be modified only if you want custom endpoint name. Otherwise you can leave it the same as folder name 
 * - Endpoint URL will be : http://<hostname>:<port>/<prefix>/<version>/<endpoint_name>/<subfolder_name>
 *      Example for User Backoffice, located on ( /src/components/backoffice/users ):
 *      - endpoint_name : backoffice
 *      - folder_name : backoffice
 *      - subfolder_name : users
 *      - URL: http://localhost:3001>/API/v1/backoffice/users/
 */


const router = require('express').Router();
const fs = require('fs')
const path = require('path')
const pathComponents = path.join(__dirname, '../components')
const config = require('./config.json')

fs
.readdirSync(pathComponents)
.filter(folder => folder != 'index.js')
.forEach(() => {
    
    config.map(c => {
      const pathAPI = path.join(pathComponents, c.folder_name)

      fs.readdirSync(pathAPI)
      .forEach(subfolder => {
        fs.readdirSync(path.join(pathAPI, subfolder))
          .forEach(file => {
            if(file.toLowerCase().includes('api'))
              router.use(`/${c.endpoint_name}/` + subfolder,  require(path.join(pathAPI, subfolder, file)))
          })
      })

    })
})

module.exports = router;
