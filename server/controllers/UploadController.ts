import BaseContext from '../BaseContext';
import express from 'express'
import { Request, Response } from 'express';
import { route, GET, POST, DELETE, PATCH, before } from 'awilix-express';
import multer, { FileFilterCallback } from "multer"
import { ENTITIES } from '../common';



@route('')
export default class RenderController extends BaseContext {

  //@GET()
  //@route('/profile/PersonalData')
  //getAllUser(req: Request, res: Response) {
  //const { UserService } = this.di;
  //const resultUser = UserService.find()
  //.then(user => {
  //return res.print('/profile/PersonalData', {
  //[ENTITIES.USERS]: user,
  //});
  //})
  // .catch((err) => res.answer(null, err, 404))
  //}

  @GET()
  @route('/profile/PrfileBrend')
  getAllBrends(req: Request, res: Response) {
    const { BrendsService } = this.di;
    const resultBrends = BrendsService.find().lean()
      .then(brends => {
        return res.print('/profile/PrfileBrend', { [ENTITIES.BRENDS]: brends, });


      })
      .catch((err: any) => {
        console.error('RenderController.home()', err);
      });
  }








}


