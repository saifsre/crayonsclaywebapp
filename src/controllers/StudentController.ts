import {getRepository, createQueryBuilder} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Student} from "../entity/Student";
import {JsonController, Get, Req, Res, Post, Controller, Body, Delete, Param, ContentType, HttpError} from "routing-controllers";
import { Address } from "../entity/Address";
import { GradeSection } from "../entity/GradeSection";
import { Teacher } from "../entity/Teacher";
import { Grade } from "../entity/Grade";

@JsonController()
export class StudentController {

    private studentRepository = getRepository(Student);
    private gradeSectionRepo = getRepository(GradeSection);
    @Get("/students/:id")
    async fetchStudentInfo(@Req() request: any, @Res() response: any){

        var studentInfo = await this.studentRepository.createQueryBuilder("student").leftJoinAndSelect("student.address", "address").leftJoinAndSelect("student.currGrade","currGrade").leftJoinAndSelect("student.parents","parents").where("student.studentNumber = :id",{id: request.params.id}).getOne();
        const foreignInfo = await this.gradeSectionRepo.createQueryBuilder("gradeSection").leftJoinAndSelect("gradeSection.classTeacher","classTeacher").leftJoinAndSelect("gradeSection.grade", "grade").where("gradeSection.Id = :id", {id: studentInfo.currGrade.Id}).getOne();
        studentInfo.currGrade = foreignInfo;
        if(!studentInfo||!foreignInfo){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return response.send(studentInfo);
        }
    }
    
    @Get("/students")
    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this.studentRepository.createQueryBuilder("student").leftJoinAndSelect("student.address", "address").leftJoinAndSelect("student.currGrade","currGrade").leftJoinAndSelect("student.parents","parents").getMany();
        for(let i=0; i < result.length;i++){
            result[i].currGrade = await this.gradeSectionRepo.createQueryBuilder("gradeSection").leftJoinAndSelect("gradeSection.classTeacher","classTeacher").leftJoinAndSelect("gradeSection.grade", "grade").where("gradeSection.Id = :id", {id: result[i].currGrade.Id}).getOne()
        }
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return result;
        }
    }

    @Post("/students")
    async save(@Body() body: any, @Res() response: Response) {
        const user = this.studentRepository.create(body);
        const result = await this.studentRepository.save(user);
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return response.send(200)  ;
        }
        
    }

    @Delete("/students/:id")
    async remove(@Param("id") id: number, @Req() request: any, @Res() response: any) {
       const ent =  await this.studentRepository.findOne(id);
       if(ent) {
          const result = await this.studentRepository.remove(ent);
          if(!result) {throw new HttpError(404,"Failed to delete the entity")}
          else return response.send(200);
    }
      throw new HttpError(404,"Cannot be deleted, Entity not found")
       
    }

}