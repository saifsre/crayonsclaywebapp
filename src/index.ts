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
import { Parent } from "./entity/Parent";
import { Course } from "./entity/Course";
import { Exam } from "./entity/Exam";
import { ExamResult } from "./entity/ExamResult";
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
    address1.postalCode = "247001"
    await connection.manager.save(address1);

    let teacher = new Teacher();
    teacher.teacherId = 123456;
    teacher.address = "1";
    teacher.fName = "Qaiser";
    teacher.lName = "Khan";
    
     let grade = new Grade();
     grade.description = "C";
     grade.name = "6th";
    
     let gradeSection = new GradeSection();
     gradeSection.classTeacher = teacher;

     var arr = []
     arr.push(gradeSection);
     grade.sections = arr

     
    gradeSection.grade = grade

    await connection.manager.save(teacher);
    await connection.manager.save(grade);
    await connection.manager.save(gradeSection);

    let parent = new Parent()
    parent.fName = "Nahid";
    parent.lName = "Pervin";
    parent.maritalStatus = "Married";
    parent.dob = new Date("December 20, 1967");

    let student = new Student();
    student.fName = "Saif";
    student.lName = "Khan";
    student.address = address1;
    student.studentNumber = 43768150;
    student.currGrade = gradeSection;
    parent.students = [student];
    student.parents = [parent];
    student.dob = new Date("August 9, 1997");
    student.specialMessage = "Your fees is due on July 30. Please pay your fees to avoid late charges"

    let course1 = new Course()
    course1.name = "English";
    course1.desc = "Elementary Literature";

    let course2 = new Course();
    course2.name = "Maths";
    course2.desc = "Elementary Level Maths";

    let course3 = new Course();
    course3.name = "Science";
    course3.desc = "Phys+Chem+Bio";

    let exam1 = new Exam();

    exam1.examType = "Half Yearly";
    exam1.examLocation = "Science Building";
    exam1.examDateTime = new Date(2018,7,3,15,30);
    exam1.course = course1;

    let exam2 = new Exam();

    exam2.examType = "Half Yearly";
    exam2.examLocation = "Math Building";
    exam2.examDateTime = new Date(2018,7,4,15,30);
    exam2.course = course2;
    let exam3 = new Exam();

    exam3.examType = "Half Yearly";
    exam3.examLocation = "Computer Science Room";
    exam3.examDateTime = new Date(2018,7,5,15,30);
    exam3.course = course3;

    await connection.manager.save(course1);
    await connection.manager.save(course2);
    await connection.manager.save(course3);
    await connection.manager.save(exam1);
    await connection.manager.save(exam2);
    await connection.manager.save(exam3);
    await connection.manager.save(student);
    await connection.manager.save(parent);

    let examResult1 = new ExamResult()
    examResult1.exam = exam1;
    examResult1.student = student;
    examResult1.marks = "73";

    let examResult2 = new ExamResult();
    examResult2.exam = exam2;
    examResult2.student = student;
    examResult2.marks = "83";

    let examResult3 = new ExamResult()
    examResult3.exam = exam3;
    examResult3.marks = "90";
    examResult3.student = student;

    await connection.manager.save(examResult1);
    await connection.manager.save(examResult2);
    await connection.manager.save(examResult3);


    app.use(bodyParser.json());


   
    // start express server
    app.listen(4000);
    console.log("Express server has started on port 4000. Open http://localhost:5000/students to see results");

}).catch(error => console.log(error));
