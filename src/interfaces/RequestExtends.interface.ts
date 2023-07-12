import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExtends extends Request {
    authUser?: JwtPayload | {userId: string, rol: string, name: string };
}