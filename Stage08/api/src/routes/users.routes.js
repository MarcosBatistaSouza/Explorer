import { Router } from "express";

export const usersRoutes = Router();

usersRoutes.post("/",(request,response) =>{
    const {name,email,password} = request.body;

    response.send(`Usuario ${name} de email ${email} e senha ${password}`);
})
