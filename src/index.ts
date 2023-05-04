import http from 'http';
import express from 'express';
import {router} from "./routes/value_proposal"


const exp = express();
exp.use(express.json());
exp.use("/",router);

const httpServer = http.createServer(exp);
const PORT: any = 8190;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
