import { Router } from 'express';
import { upload } from '../middlewares/multer.js';
import isValidId from '../middlewares/isValidId.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';


const photoRouter = Router();

photoRouter.post(
    '/',
    
    isValidId,
    upload.single('photo'), // додаємо цю middleware
    validateBody(createStudentSchema),
    ctrlWrapper(createStudentController),
  );
  
  photoRouter.put(
    '/:studentId',
   
    isValidId,
    upload.single('photo'), // додаємо цю middleware
    validateBody(createStudentSchema),
    ctrlWrapper(upsertStudentController),
  );
  
  photoRouter.patch(
    '/:studentId',
   
    isValidId,
    upload.single('photo'), // додаємо цю middleware
    validateBody(updateStudentSchema),
    ctrlWrapper(patchStudentController),
  );