import { NextFunction,Request,Response } from "express";
import ErrorHandler from "../utils/errorhandler";

export const ErrorMiddleware = (err:any, req:Request,res:Response,next:NextFunction) =>{
        err.statusCode = err.statusCode || 500;
        err.message = err.message || "internal server error";
        
      if(err.name == "CastError"){
        const message = `Resource are not Found ${err.path}`;
        err = new ErrorHandler(message,400);
      }

      if(err.code == 1000){
         const message = `duplicate ${Object.keys(err.keysValue)} entries`;
         err = new ErrorHandler(message , 400);
      }

       if(err.name === "JsonWebTokenError")
        {
            const message = `json web token is invalid , try again`;
            err = new ErrorHandler(message, 400);
        }  
         res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
}