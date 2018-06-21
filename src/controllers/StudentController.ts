import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Student} from "../entity/Student";
import {JsonController, Get, Req, Res, Post, Controller, Body, Delete, Param, ContentType, HttpError} from "routing-controllers";

@JsonController()
export class StudentController {

    private studentRepository = getRepository(Student);

    @Get("/students")
    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this.studentRepository.find();
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return result;
        }
    }

    @Get("/students/:id")
    async one(@Req() request: any, @Res() response: any) {
    const result = await this.studentRepository.findOne(request.params.id);
    if(!result){
        throw new HttpError(404,"The Request Failed");
    }
    else {
        return result;
    }
    }

    @ContentType("application/json")
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