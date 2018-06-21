import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Parent} from "../entity/Parent";
import {JsonController, Get, Req, Res, Post, Controller, Body, Delete, Param, ContentType, HttpError} from "routing-controllers";

@JsonController()
export class StudentController {

    private parentRepository = getRepository(Parent);

    @Get("/parents")
    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this.parentRepository.find();
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return result;
        }
    }

    @Get("/parents/:id")
    async one(@Req() request: any, @Res() response: any) {
    const result = await this.parentRepository.findOne(request.params.id);
    if(!result){
        throw new HttpError(404,"The Request Failed");
    }
    else {
        return result;
    }
    }

    @ContentType("application/json")
    @Post("/parents")
    async save(@Body() body: any, @Res() response: Response) {
        const user = this.parentRepository.create(body);
        const result = await this.parentRepository.save(user);
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return response.send(200)  ;
        }
        
    }

    @Delete("/parents/:id")
    async remove(@Param("id") id: number, @Req() request: any, @Res() response: any) {
       const ent =  await this.parentRepository.findOne(id);
       if(ent) {
          const result = await this.parentRepository.remove(ent);
          if(!result) {throw new HttpError(404,"Failed to delete the entity")}
          else return response.send(200);
    }
      throw new HttpError(404,"Cannot be deleted, Entity not found")
       
    }
}