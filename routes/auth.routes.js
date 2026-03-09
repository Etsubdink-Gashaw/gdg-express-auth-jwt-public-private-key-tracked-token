import { signUp,signIn, refreshToken, logout } from "../controllers/auth.controller.js"
import {Router} from "express"
const authRouter = Router()

authRouter.post('/sign-up',signUp);
authRouter.post("/sign-in",signIn)
authRouter.post("/refresh-token",refreshToken)
authRouter.post("/sign-out",logout)



export default authRouter;
