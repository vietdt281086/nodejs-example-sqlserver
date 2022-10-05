import express from "express";
import eventController from '../controllers/eventController';

let router = express.Router();

let initRouters = (app) => {
    app.get('/events', eventController.getEvents);
    app.get('/events/:id', eventController.getById);
    app.get('/eventsprocedure', eventController.getDataFromProcedure);
    return app.use('/', router);
}

module.exports = initRouters;

// router.get('/events', eventController.getEvents);
// router.get('/events/:id', eventController.getById);
// router.get('/eventsprocedure', eventController.getDataFromProcedure);

// module.exports = {
//     routes: router
// };