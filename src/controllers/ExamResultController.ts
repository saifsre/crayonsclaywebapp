import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {JsonController, Get, Req, Res, Post, Controller, Body, Delete, Param, ContentType, HttpError} from "routing-controllers";
import { ExamResult } from "../entity/ExamResult";

@JsonController()
export class StudentController {

    private repo = getRepository(ExamResult);

    @Get("/examresults")
    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this.repo.find();
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return result  ;
        }
    }

    @Get("/examresults/:id")
    async one(@Req() request: any, @Res() response: any) {
    const result = await this.repo.findOne(request.params.id);
    if(!result){
        throw new HttpError(404,"The Request Failed");
    }
    else {
        return result;
    }
    }

    @ContentType("application/json")
    @Post("/examresults")
    async save(@Body() body: any, @Res() response: Response) {
        const user = this.repo.create(body);
        const result = await this.repo.save(user);
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return response.send(200)  ;
        }
        
    }

    @Delete("/examresults/:id")
    async remove(@Param("id") id: number, @Req() request: any, @Res() response: any) {
       const ent =  await this.repo.findOne(id);
       if(ent) {
          const result = await this.repo.remove(ent);
          if(!result) {throw new HttpError(404,"Failed to delete the entity")}
          else return response.send(200);
    }
      throw new HttpError(404,"Cannot be deleted, Entity not found")
       
    }
}