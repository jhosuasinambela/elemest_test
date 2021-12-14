/*
 * Copyright (c) 2020 Kevin Pardosi - Sprout Digital Labs.
 * All rights reserved.
 */

'use strict';

const Helper = require('@helpers/pagination')
const sequelize = require("sequelize");
const { Op } = require('sequelize');

module.exports = {
    getValueLike: async function(models, value, source, target){
        const model = require('@models')[models],
            condition = {};

        condition[source] = {[Op.like]: value};

        const getData = await model.findOne({
            where: condition,
            attributes: [target]
        });

        let result;
        result = getData !== null ? getData.getDataValue(target) : null;

        return result;
    },

    checkDataIsexist: async function(models, value, source){
        const model = require('@models')[models],
            condition = {};

        condition[source] = {[Op.like]: value};

        const getData = await model.findAll({
            where: condition
        });

        let result;
        result = getData.length > 0 ? true : false;

        return result;
    },

    getValueEqual: async function(models, value, source,include){

        const  condition = {};

        condition[source] = value;
        let option ={
            where: condition
        }
        if(include)
            option.include=include;
        return models.findOne(option);
    },

    getDataPagination: async (model,condition,query,include,cb)=>{
        let page = query.page? parseInt(query.page): 1;
        let limit = query.limit? parseInt(query.limit): 10;
       let order = query.order
        console.log('order-=>',order)
        let option ={
            where: condition,
            offset: Helper.pagyOffset(limit, page),
            limit: limit,
            order:order
        }

        if(include)
            option.include=include;

        try {
            const datas =await model.findAll(option)
            const datax = await model.count({ where: condition })
            const result = {
                pagination: Helper.pagination(datax, limit,page),
                data: datas
            }
            return cb(null, result)
        } catch (e) {
            console.error(`error get ${model.tableName} ==> `,e)
            return cb(e)
        }
    },

    isJson: (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    },

    isEmptyObj: (obj) => {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({});
    },

    extractString: (str, param) => {
        return str.length > 0 ? str.substr(0, str.indexOf(param)) : null;
    }
}
