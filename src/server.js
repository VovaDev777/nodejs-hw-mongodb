import express from "express";
import cors from "cors";
import pino from "pino-http";


const startServer = () => {
    const app = express();

    const logger = pino({
        transport: {
            target: "pino-pretty"
        }
    });
    app.use(logger);
    app.use(cors());
    app.use(express.json());

};

export default startServer;