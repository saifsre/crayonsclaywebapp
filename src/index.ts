import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {createExpressServer} from "routing-controllers";
createConnection().then(async connection => {

    // create express app    
    const app = createExpressServer({
        controllers: [__dirname + "/controllers/**/*.ts"]
 
    });
    
    app.use(bodyParser.json());


    // start express server
    app.listen(4000);
    console.log("Express server has started on port 3000. Open http://localhost:5000/students to see results");

}).catch(error => console.log(error));
