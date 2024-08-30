import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { env } from './utils/env.js';
import * as contactsServices from "./services/contacts.js";

const setupServer = () => {
  const app = express();

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });
  app.use(logger);
  app.use(cors());
  app.use(express.json());

  app.get("/contacts", async(req, res) => {
    const data = await contactsServices.getAllContacts();

    res.json({
        status: 200,
        message: "Successfully found contacts!",
        data
    });
  });

  app.get("/contacts/:id", async(req, res) => {
    const data = await contactsServices.getAllContacts();

    res.json({
        status: 200,
        message: "Successfully found contacts!",
        data
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((error, req, res, next) => {
    res.status(500).json({
      message: error.message,
    });
  });

  const port = Number(env('PORT', 3000));

  app.listen(port, () =>
    console.log(`Server is running on port ${process.env.PORT}`),
  );
};

export default setupServer;
