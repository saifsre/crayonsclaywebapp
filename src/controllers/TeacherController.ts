import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Teacher} from "../entity/Teacher";
import {JsonController, Get, Req, Res, Post, Controller, Body, Delete, Param, ContentType, HttpError} from "routing-controllers";

@JsonController()
export class StudentController {

    private teacherRepository = getRepository(Teacher);

    @Get("/teachers")
    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this.teacherRepository.find();
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return result  ;
        }
    }

    @Get("/teachers/:id")
    async one(@Req() request: any, @Res() response: any) {
    const result = await this.teacherRepository.findOne(request.params.id);
    if(!result){
        throw new HttpError(404,"The Request Failed");
    }
    else {
        return result;
    }
    }

    @ContentType("application/json")
    @Post("/teachers")
    async save(@Body() body: any, @Res() response: Response) {
        const user = this.teacherRepository.create(body);
        const result = await this.teacherRepository.save(user);
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return response.send(200)  ;
        }
        
    }

    @Delete("/teachers/:id")
    async remove(@Param("id") id: number, @Req() request: any, @Res() response: any) {
       const ent =  await this.teacherRepository.findOne(id);
       if(ent) {
          const result = await this.teacherRepository.remove(ent);
          if(!result) {throw new HttpError(404,"Failed to delete the entity")}
          else return response.send(200);
    }
      throw new HttpError(404,"Cannot be deleted, Entity not found")
       
    }
}