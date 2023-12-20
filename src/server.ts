import express, {Response, Request} from "express";
import dotenv from "dotenv";
import routes from "./routes/config-router";

const server = express();
dotenv.config();

server.use(routes);

server.listen(process.env.PORT, () => console.log(`Link http://localhost:${process.env.PORT}/`));
