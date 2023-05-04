"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const value_proposal_1 = require("../controller/value_proposal");
const router = express_1.default.Router();
exports.router = router;
router.get("/sites/MLB/v1/value-proposal/6", value_proposal_1.getValueProposal);
