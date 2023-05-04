import { Request, Response } from 'express';
import value_proposal from "../information/value_proposal.json"


const getValueProposal = async (req: Request, res:Response) =>{
    let answer:any = value_proposal;
    return res.status(200).json(answer);
}

export {getValueProposal}
