import { Router } from 'express';

import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import { userSignupSchema } from '../validation/users.js';

const authRouter = Router();

authRouter.post("/register", validateBody(userSignupSchema), )

export default authRouter;