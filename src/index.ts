import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {createExpressServer} from "routing-controllers";
import { Address } from "./entity/Address";
import { Student } from "./entity/Student";
import { GradeSection } from "./entity/GradeSection";
import { Teacher } from "./entity/Teacher";
import { Grade } from "./entity/Grade";
createConnection().then(async connection => {

    // create express app    
    const app = createExpressServer({
        cors: true,
        routePrefix: "/api",  
        controllers: [__dirname + "/controllers/**/*.ts"]
 
    });
    let address1 = new Address();
    address1.address1 = "Purani Mandi";
    address1.address2 = "Budhi Mai Chowk";
    address1.city = "Saharanpur";
    address1.country = "India"
    address1.state="UP";
    await connection.manager.save(address1);

    let teacher = new Teacher();
    teacher.teacherId = 123456;
    teacher.address = "1";
    teacher.fName = "Qaiser";
    teacher.lName = "Khan";
    
     let grade = new Grade();
     grade.description = "Class 2";
     grade.name = "6";
    
     let gradeSection = new GradeSection();
     gradeSection.classTeacher = teacher;

     var arr = []
     arr.push(gradeSection);
     grade.sections = arr

     
     gradeSection.grade = grade

    await connection.manager.save(teacher);
    await connection.manager.save(grade);
    await connection.manager.save(gradeSection);

    let student = new Student();
    student.fName = "Saif";
    student.lName = "Khan";
    student.address = address1;
    student.studentNumber = 43768150;
    student.currGrade = gradeSection;
    

    await connection.manager.save(student);

    app.use(bodyParser.json());


   
    // start express server
    app.listen(4000);
    console.log("Express server has started on port 3000. Open http://localhost:5000/students to see results");

}).catch(error => console.log(error));
