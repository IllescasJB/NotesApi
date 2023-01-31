import express, {Express} from 'express';
import swaggerUi, { SwaggerUiOptions } from "swagger-ui-express";
import swaggerJsdoc from 'swagger-jsdoc';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import notesBdConnection from './util/connection';
import './util/process';
import router from './api/routes';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const allowedOrigins = ['http://localhost:34511'];
const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins
}

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Notes API',
            version: '0.0.1',
            description:    
                'This is a simple CRUD API application made with Express and document with Swagger'
        },
        servers: [
            {
                url: 'http://localhost:8000'
            }
        ]
    },
    apis: ['./src/schemas/*.ts'], // files containing annotations as above
};

const optionsSwaggerDocument: SwaggerUiOptions = {
    swaggerUrl: "/swagger-ui/api-docs.json",
    swaggerOptions: {
        explorer: true,
        displayOperationId: true
    },
}

const openapiSpecification = swaggerJsdoc(options);

app.get('/swagger-ui/api-docs.json', (req, res) => res.json(openapiSpecification));

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
    '/swagger-ui',
    swaggerUi.serve,
    swaggerUi.serveFiles(undefined,optionsSwaggerDocument),
    swaggerUi.setup(undefined,optionsSwaggerDocument)
);

app.use('/api/v1',router);

const start = async (): Promise<void> => {
    try {
        await notesBdConnection.sync();
        app.listen(port, () => {
            console.log(`[server]: Server is runnig at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

void start();