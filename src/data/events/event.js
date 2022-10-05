import utils from '../utils';
import configSql from '../../config/sqlConnect';
import sql from 'mssql';

const getEvents = async () => {
    try {
        let pool = await sql.connect(configSql.sql);
        //console.log('>>Pool: ', sqlQueries);
        let sqlQueries = await utils.loadSqlQueries('events');
        let list = await pool.request().query(sqlQueries.eventslist);
        return list.recordsets;
    } catch (error) {
        return error.message;
    }
}

const getById = async (id) => {
    try {
        let pool = await sql.connect(configSql.sql);
        let sqlQueries = await utils.loadSqlQueries('events');
        let oneEvent = await pool.request()
            .input('id', sql.NVarChar, id)
            .query(sqlQueries.eventbyId);
        return !oneEvent.recordset ? {} : oneEvent.recordset[0];
    } catch (error) {
        return error.message;
    }
}

const getDataFromProcedure = async () => {
    try {
        let pool = await sql.connect(configSql.sql);
        let list = await pool.request()
            .execute('hbm_sp_Combobox_DM_ToChuc');
        return !list.recordsets ? [] : list.recordsets[0];
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getEvents,
    getById,
    getDataFromProcedure
}