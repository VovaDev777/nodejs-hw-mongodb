import express from "express";
import cors from "cors";
import pino from "pino-http";
import dotenv from "dotenv";


dotenv.config();
const port = Number(process.env.PORT || 3000);

const setupServer = () => {
    const app = express();

    const logger = pino({
        transport: {
            target: "pino-pretty"
        }
    });
    app.use(logger);
    app.use(cors());
    app.use(express.json());


    app.use((req, res) => {
        res.status(404).json({
            message: 'Not found',
        });
    });

    app.use((error, req, res, next) => {
        res.status(500).json({
            message: error.message
        });
    });

    app.listen(port, () => console.log(`Server is running on port ${process.env.PORT}`));
};

export default setupServer;