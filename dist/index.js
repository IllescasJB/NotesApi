"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./util/connection"));
require("./util/process");
const routes_1 = __importDefault(require("./api/routes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const allowedOrigins = ['http://localhost:34511'];
const corsOptions = {
    origin: allowedOrigins
};
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Notes API',
            version: '0.0.1',
            description: 'This is a simple CRUD API application made with Express and document with Swagger'
        },
        servers: [
            {
                url: 'http://localhost:8000'
            }
        ]
    },
    apis: ['./src/schemas/*.ts'], // files containing annotations as above
};
const optionsSwaggerDocument = {
    swaggerUrl: "/swagger-ui/api-docs.json",
    swaggerOptions: {
        explorer: true,
        displayOperationId: true
    },
};
const openapiSpecification = (0, swagger_jsdoc_1.default)(options);
app.get('/swagger-ui/api-docs.json', (req, res) => res.json(openapiSpecification));
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/swagger-ui', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.serveFiles(undefined, optionsSwaggerDocument), swagger_ui_express_1.default.setup(undefined, optionsSwaggerDocument));
app.use('/api/v1', routes_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.sync();
        app.listen(port, () => {
            console.log(`[server]: Server is runnig at http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
void start();
