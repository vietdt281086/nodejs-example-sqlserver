import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine';
import eventRouter from './route/eventRouter';
import configInfo from './config/sqlConnect';

let cors = require('cors');

let app = express();

//config app
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
eventRouter(app);

//check change from github

//app.use('/api', eventRouter.routes);

//let port = process.env.PORT || 8077;
app.listen(configInfo.port, () => {
    //callback
    console.log("Backend nodejs is running on the port " + configInfo.port)
})