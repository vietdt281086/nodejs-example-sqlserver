import express from "express";
import dbConfig from '../config/sqlConnect';
import sql from 'mssql';

let getHomePage = (res, req) => {
    req.send('HEELo')
}

module.exports = {
    getHomePage: getHomePage
}