import express from 'express';
import {getValueProposal} from "../controller/value_proposal"
const router = express.Router();

router.get("/sites/MLB/v1/value-proposal/6", getValueProposal);

export {router}
