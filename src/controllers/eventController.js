import eventData from '../data/events/event';

const getEvents = async (req, res, next) => {
    try {
        let events = await eventData.getEvents();
        res.send(events);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getById = async (req, res, next) => {
    try {
        let id = req.params.id; //get object => req.body
        let event = await eventData.getById(id);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getDataFromProcedure = async (req, res, next) => {
    try {
        let events = await eventData.getDataFromProcedure();
        res.send(events);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getEvents: getEvents,
    getById: getById,
    getDataFromProcedure: getDataFromProcedure
}