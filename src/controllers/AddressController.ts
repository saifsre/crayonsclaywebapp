import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {JsonController, Get, Req, Res, Post, Controller, Body, Delete, Param, ContentType, HttpError} from "routing-controllers";
import { Address } from "../entity/Address";

@JsonController()
export class StudentController {

    private addressRepo = getRepository(Address);

    @Get("/address")
    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this.addressRepo.find();
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return result  ;
        }
    }

    @Get("/address/:id")
    async one(@Req() request: any, @Res() response: any) {
    const result = await this.addressRepo.findOne(request.params.id);
    if(!result){
        throw new HttpError(404,"The Request Failed");
    }
    else {
        return result;
    }
    }

    @ContentType("application/json")
    @Post("/address")
    async save(@Body() body: any, @Res() response: Response) {
        const user = this.addressRepo.create(body);
        const result = await this.addressRepo.save(user);
        if(!result){
            throw new HttpError(404,"The Request Failed");
        }
        else {
            return response.send(200)  ;
        }
        
    }

    @Delete("/address/:id")
    async remove(@Param("id") id: number, @Req() request: any, @Res() response: any) {
       const ent =  await this.addressRepo.findOne(id);
       if(ent) {
          const result = await this.addressRepo.remove(ent);
          if(!result) {throw new HttpError(404,"Failed to delete the entity")}
          else return response.send(200);
    }
      throw new HttpError(404,"Cannot be deleted, Entity not found")
       
    }
}